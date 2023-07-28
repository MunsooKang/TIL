import csv
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib import dates

def  file_opne_by_numpy():
    np_arr = np.loadtxt('NFLX.csv', delimiter=",", encoding='cp949', dtype=str)
    return np_arr

arr = file_opne_by_numpy()

df = pd.DataFrame(arr)
headers = ['날짜', '시초가', '고가', '저가', '종가', '시외가', '거래량']
df.columns = headers
idxs = df[df['날짜'] <='2020-12-31'].index
df.drop(idxs, inplace = True)
df = df.iloc[1:]

df['날짜'] = df['날짜'].str.slice(stop=7)
df['종가'] = pd.to_numeric(df['종가'])
group = df.groupby('날짜')['종가'].mean().reset_index()

group['날짜'] = pd.to_datetime(group['날짜'])

x = group['날짜']
y = group['종가']

plt.plot(x, y)

plt.title('Monthly Average Close Price')
plt.xlabel('Date')
plt.ylabel('Average Close Pirce')
plt.xticks(rotation=45)
ax = plt.gca()
ax.xaxis.set_major_locator(dates.MonthLocator(bymonth=[1, 3, 5, 7, 9, 11]))
plt.show()