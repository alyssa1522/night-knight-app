#include <SoftwareSerial.h>

const int trigPin = 11;           //connects to the trigger pin on the distance sensor
const int echoPin = 12;           //connects to the echo pin on the distance sensor

SoftwareSerial BTSerial(1,0); 

float distance = 0;               //stores the distance measured by the distance sensor

void setup()
{
  Serial.begin (9600);        //set up a serial connection with the computer
  BTSerial.begin(9600);

  pinMode(trigPin, OUTPUT);   //the trigger pin will output pulses of electricity
  pinMode(echoPin, INPUT);    //the echo pin will measure the duration of pulses coming back from the distance sensor

}

void loop() {
  if (BTSerial.available()) {
    char data = BTSerial.read();

    Serial.print("Received via Bluetooth: ");
    Serial.println(data);

  }

  distance = getDistance();   //variable to store the distance measured by the sensor
  
  BTSerial.print("Distance: ");
  BTSerial.print(distance);     //print the distance that was measured
  BTSerial.println(" in");      //print units after the distance

  Serial.print("Distance: ");
  Serial.print(distance);     //print the distance that was measured
  Serial.println(" in");      //print units after the distance

  if (distance <= 20) {                       //if the object is close
    BTSerial.println("ALERT: Patient has left the premises!");
    Serial.println("ALERT: Patient has left the premises!");  

  } 
  delay(50);      //delay 50ms between each reading
  
}

//------------------FUNCTIONS-------------------------------

//RETURNS THE DISTANCE MEASURED BY THE HC-SR04 DISTANCE SENSOR
float getDistance()
{
  float echoTime;                   //variable to store the time it takes for a ping to bounce off an object
  float calculatedDistance;         //variable to store the distance calculated from the echo time

  //send out an ultrasonic pulse that's 10ms long
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  echoTime = pulseIn(echoPin, HIGH);      //use the pulsein command to see how long it takes for the
                                          //pulse to bounce back to the sensor

  calculatedDistance = echoTime / 148.0;  //calculate the distance of the object that reflected the pulse (half the bounce time multiplied by the speed of sound)

  return calculatedDistance;              //send back the distance that was calculated
}