from genericpath import isfile
import urllib.request
import os

urllib.request.urlretrieve('https://data.cityofnewyork.us/api/views/gyrw-gvqc/rows.csv?accessType=DOWNLOAD', 'crowds.csv')

def crowds_data_is_downloaded():
  filename = 'crowds.csv'

  if os.path.isfile(filename):
      print('yes')
      return True
  else: 
      return False

if not crowds_data_is_downloaded():
  urllib.request.urlretrieve('https://data.cityofnewyork.us/api/views/gyrw-gvqc/rows.csv?accessType=DOWNLOAD', 'crowds.csv')

  