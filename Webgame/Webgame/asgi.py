"""
ASGI config for Webgame project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

from django.core.asgi import get_asgi_application
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Webgame.settings')

application = get_asgi_application()


from django.core.asgi import get_asgi_application

from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from GAME.routing import websocket_urlPattern

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': AuthMiddlewareStack(URLRouter(websocket_urlPattern))
})