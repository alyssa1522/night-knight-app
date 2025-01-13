import serial
import time
from flask import Flask, jsonify

app = Flask(__name__)

# Setup Bluetooth Serial
arduino = serial.Serial('/dev/cu.usbserial-1420', baudrate=9600, timeout=1)

# Initialize the alert_message variable
alert_message = None

@app.route('/trigger_alert')
def trigger_alert():
    global alert_message
    alert_message = "Patient has left the premises!"
    return jsonify({"message": alert_message})

# Endpoint to get the current alert message
@app.route('/get_alert', methods=['GET'])
def get_alert():
    global alert_message
    return jsonify({"message": alert_message})

# Simulate alert clearing after some time
def clear_alert():
    global alert_message
    time.sleep(10)  # Wait for 10 seconds before clearing the alert
    alert_message = None

def index():
    return 'Flask app is running!'

def listen_for_data():
    global alert_message
    while True:
        if arduino.in_waiting > 0:
            data = arduino.readline().decode('utf-8').strip()
            print(f"Data received from Arduino: {data}")
            if 'ALERT' in data:  # Modify this condition as per your logic
                alert_message = "Patient has left the premises!"
                print(f"Sending ALERT: {alert_message}")
        time.sleep(1)

# Start listening for data in a separate thread
import threading
threading.Thread(target=listen_for_data, daemon=True).start()

if __name__ == '__main__':
    app.run(debug=True)
