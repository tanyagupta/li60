import logging

from google.appengine.api import urlfetch

from flask import Flask, render_template, request


app = Flask(__name__)


@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/tos')
def flash_cards():
    return render_template('tos.html')

@app.route('/helpnewsfinder')
def subs():
    return render_template('helpnewsfinder.html')




@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500
