# **Automated Delete Tweets**  

## **Project Description**  
**Automated Delete Tweets** is a Python-based tool designed to help users manage and delete their tweets in bulk. If you want to clear all your past tweets this tool provides an efficient solution. Ideal for anyone looking to clean up their Twitter feed with minimal effort!


## **Table of Contents**
1. [Installation](#installation)
2. [Usage](#usage)
3. [Additional Sections](#additional-sections)

---

## **Installation Instructions**  

Follow these steps to set up the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Aafimalek/automated_delete_tweets.git
    cd automated_delete_tweets
    ```

2. **Create a virtual environment** (recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. **Install required dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Configure Twitter API keys**:  
   To interact with Twitter's API, you'll need to set up API keys. Store these keys in `config.py` as environment variables.
   Note:- You'll need elevated v1.1 api acess in order to delete tweets

---

## **Usage Instructions**

After configuring your API keys, you can start using the tool to delete tweets. Below are basic usage instructions for the different files:

1. **Delete Selected Tweets**:
    ```bash
    python delete-tweet.py
    ```

2. **Tamper Moneky**
   ```
   use extension like tamper monkey and create a new script and copy-paste the 'tweet_delete.js' file and save the script
   then open x.com and go to profile section and enable the script and refresh the page.
   ```

> **Note**: Each script is modular, allowing you to authenticate, fetch tweet IDs, and delete tweets independently.
> If you don't want to use this method use tamper monekey extesnion from chrome browser and open twitter.com and then run the .js file it will delete the oldest tweets from the timeline 

---

## **Additional Sections**

### **Features**  
- Bulk tweet deletion
- Twitter API authentication checker

### **Known Issues / Limitations**  
- API rate limits may restrict deletion speed.
- Only supports tweets from accounts with API access.

### **Contact**  
For questions or suggestions, feel free to open an issue or reach out at [aafimalek2023@gmail.com].

---

> **Enjoy managing your Twitter feed effortlessly!**
