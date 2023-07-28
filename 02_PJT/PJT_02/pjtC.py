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

close = df.loc[:, '종가']
max_price = close.max()
min_price = close.min()

print("최고 종가:", max_price)
print("최저 종가:", min_price)