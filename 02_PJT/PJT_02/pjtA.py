# A. 데이터 전처리 - 데이터 읽어오기
# Pandas 를 사용하여 cvs 파일(NLFX)을 DateFrame 으로 읽어온다
# 이 떄 [Data, Open, High, Low, Close] 필드만 읽어온다

import csv
import numpy as np
import pandas as pd

def  file_opne_by_numpy():
    np_arr = np.loadtxt('NFLX.csv', delimiter=",", encoding='cp949', dtype=str)
    return np_arr

arr = file_opne_by_numpy()

df = pd.DataFrame(arr)
headers = ['날짜', '시초가', '고가', '저가', '종가', '시외가', '거래량']
df.columns = headers
print(df.loc[:, '날짜' : '종가'])
