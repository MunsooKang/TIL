import csv
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib import dates

# 2022 high, low, close 일별로

def  file_opne_by_numpy():
    np_arr = np.loadtxt('NFLX.csv', delimiter=",", encoding='cp949', dtype=str)
    return np_arr

arr = file_opne_by_numpy()

df = pd.DataFrame(arr)
headers = ['날짜', '시초가', '고가', '저가', '종가', '시외가', '거래량']
df.columns = headers
idxs = df[df['날짜'] <='2021-12-31'].index
df.drop(idxs, inplace = True)
df = df.iloc[1:]

df['고가'] = pd.to_numeric(df['고가'])
df['저가'] = pd.to_numeric(df['저가'])
df['종가'] = pd.to_numeric(df['종가'])
df['날짜'] = pd.to_datetime(df['날짜'])

x = df['날짜']
y1 = df['고가']
y2 = df['저가']
y3 = df['종가']

plt.plot(x, y1, label='High')
plt.plot(x, y2, label='Low')
plt.plot(x, y3, label='Close')
plt.legend()
plt.title('High, Low, and Close Prices since January 2022')
plt.xlabel('Date')
plt.ylabel('Price')
plt.xticks(rotation=45)

plt.show()

