# B. 데이터 전처리 - 2021년 이후의 종가 데이터 출력하기
# cvs 파일을 DateFrame 으로 읽어와 2021년 이후의 데이터만 필터링
# * 데이터 타입 변경 후 필터링 진행, Pandas의 to_datetime()활용
# 필터링 완료된 DateFrame의 종가데이터를 Matplotlib를 사용하여 시각화

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
df['날짜'] = pd.to_datetime(df['날짜'])
df['종가'] = pd.to_numeric(df['종가'])

x = df['날짜']
y = df['종가']

plt.plot(x, y)

plt.title('NFLX Close Price')
plt.xlabel('Date')
plt.ylabel('Close Pirce')
plt.xticks(rotation=45)
ax = plt.gca()
ax.xaxis.set_major_locator(dates.MonthLocator(bymonth=[1, 3, 5, 7, 9, 11]))
plt.show()
