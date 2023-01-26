import json
from .Camera import initSetup, getFingersValue
from channels.generic.websocket import WebsocketConsumer

class FingerConsumer(WebsocketConsumer):

    def connect(self):
        self.accept()
        initSetup()

        try:
            while True:
                data = getFingersValue()
                if data == 'Naal':
                    print('Naal')
                    break
                if not data:
                    break

                if data['Finger'] != '':

                    self.send(json.dumps(data))
        except Exception as e:
            print('Error', e)



    def receive(self, text_data=None, bytes_data=None):
        pass

    def disconnect(self, code):
        pass