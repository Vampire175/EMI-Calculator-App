
from flask import Flask,render_template
app = Flask(__name__)
@app.route('/')
def mainpage():
    return render_template('index.html')
@app.route('/about')
def about():
    return render_template('about.html')
@app.route('/privacy')
def privacy():
    return render_template('privacy.html')
@app.route('/usage')
def usage():
    return render_template('usage.html')
if __name__ == '__main__':
    app.run(debug=True)
