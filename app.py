import os

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/test')
def hello():
    return render_template('test.html')


@app.route("/")
def hello_world():
    return render_template('index.html')

@app.route('/tos')
def flash_cards():
    return render_template('tos.html')


@app.route('/helpnewsfinder')
def help_newsfinder():
    return render_template('helpnewsfinder.html')

@app.route('/helpwordcloudaddon')
def help_wordcloudaddon():
    return render_template('helpwordcloudaddon.html')

@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))


# import logging
#
# from google.appengine.api import urlfetch
#
#
# from flask import Flask, render_template, request
#
#
# app = Flask(__name__)
#
#
# @app.route('/')
# def hello():
#     return render_template('index.html')
#
#
# @app.route('/tos')
# def flash_cards():
#     return render_template('tos.html')
#
# @app.route('/helpnewsfinder')
# def help_newsfinder():
#     return render_template('helpnewsfinder.html')
#
# @app.route('/helpwordcloudaddon')
# def help_wordcloudaddon():
#     return render_template('helpwordcloudaddon.html')
#
#
#
# @app.errorhandler(500)
# def server_error(e):
#     # Log the error and stacktrace.
#     logging.exception('An error occurred during a request.')
#     return 'An internal error occurred.', 500
