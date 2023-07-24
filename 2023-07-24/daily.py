word = input()
word = word.replace(" ","")
reword = ''
for i in word:
    reword = i + reword
if word.upper() == reword.upper():
    print('입력하신 단어는 회문\n(Palindrome)입니다.')

print(reword)
