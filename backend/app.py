from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

#carregar variaveis do ambiente
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
 #permite requisições do React

#configurações do email
EMAIL_ADDRESS = os.getenv('EMAIL_ADDRESS')
EMAIL_PASSWORD = os.getenv('EMAIL_PASSWORD')
SMPT_SERVER = os.getenv('SMPT_SERVER', 'smtp.gmail.com')
SMPT_PORT = int(os.getenv('SMPT_PORT', 587))

def send_email(name, email, message):
    try:
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = EMAIL_ADDRESS #envia para você mesmo
        msg['Subject'] = f"Nova mensagem de contato - {name}"

        body = f"""
        Nova mensagem recebida via formulário de contato:
        
        Nome: {name}
        E-mail: {email}
        Mensagem: 
        {message}
        """
        msg.attach(MIMEText(body, 'plain'))

        #conectar ao servidor SMTP
        server = smtplib.SMTP(SMPT_SERVER, SMPT_PORT)
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.sendmail(EMAIL_ADDRESS, EMAIL_ADDRESS, msg.as_string())
        server.quit()

        return True
    except Exception as e:
        print(f"Erro ao enviar e-mail: {e}")
        return False

@app.route('/api/send_email', methods=['POST'])
def send_contact_email():
    data = request.get_json()

    name = data.get['name']
    email = data.get['email']
    message = data.get['message']

    if not all([name, email, message]):
        return jsonify({'error': 'Todos os campos são obrigatórios'}), 400

    success = send_email(name, email, message)

    if success:
        return jsonify({'message': "E-mail enviado com sucesso!"}), 200
    else:
        return jsonify({'error': 'Erro ao enviar e-mail'}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)