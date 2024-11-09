import tweepy
import os

# Twitter API credentials
CONSUMER_KEY = 'YOUR_CONSUMER_KEY'
CONSUMER_SECRET = 'YOUR_CONSUMER_SECRET'
ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'
ACCESS_TOKEN_SECRET = 'YOUR_ACCESS_TOKEN_SECRET'

# Authenticate to Twitter
auth = tweepy.OAuth1UserHandler(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

def fetch_oldest_tweets(username, count=100):
    tweets = api.user_timeline(screen_name=username, count=count, tweet_mode="extended")
    return [tweet.id for tweet in tweets]

def delete_tweets(tweet_ids):
    for tweet_id in tweet_ids:
        try:
            api.destroy_status(tweet_id)
            print(f"Deleted tweet ID {tweet_id}")
        except tweepy.TweepError as e:
            print(f"Error deleting tweet ID {tweet_id}: {e}")

if __name__ == "__main__":
    username = input("Enter the Twitter username: ")
    tweet_ids = fetch_oldest_tweets(username)
    print(f"Fetched {len(tweet_ids)} tweet IDs. Starting deletion...")
    delete_tweets(tweet_ids)
    print("Deletion completed.")
