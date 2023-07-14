#Github
## add commit push
#git

push : 로컬에 있는 파일을 원격으로 옮김

pull : 원격에 있는 수정사항을 가져옴

clone : 원격에 있는 그대로 가져옴

git push -u origin master : 오리진 주소로 옮겨줘 깃에.
* -u : 최초의 푸시에만 사용함.
* 'origin' 이름으로 주소가 등록되어 있어야 함.

git pull origin master : 깃에 있는 오리진 주소의 변경사항을 가져와줘.
* origin 주소가 있어야 함
* complete(충돌) 문제 해결해야 함

git clone '주소' : 주소의 모든 사항을 복사해줘
* clone으로 받은 파일은 이미 git init, remote 설정이 되어 있음.

gitignore : git에서 특정 파일이나 디렉토리를 추적하지 않도록 설정하는 데 사용되는 텍스트 파일
* ignore 해야 하는 파일 : api, 개인정보, 너무 무거운 파일 등

새 레포 생성 후 해당 주소로 바로 클론 만들기(git clone 'url')
* -> 초기 설정 안해도 됨(git init, git remote add 'url'

local 파일을 드래그해서 visual studio code에 놓기 -> vs code 내에서 추가, 터미널 사용 가능

barnch : git branch 'dev' 가지치기(평행세계)
* 브랜치 종류 dev(개발), feature(기능), hotfix(수정) 등

branch 변경 : git checkout 'branch'
* branch가 바뀌면 push 초기설정도 새로 해줘야함(git push --set-upstream 'ssafy' 'dev')



#TIL

1. Today I Learned : 오늘 내가 배운 내용 정리



#MarkDown

1. 타이틀(강조) : '#' 제목, '##' 부제목 ... '#######' 최대 6개까지 가능
2. 수평선 : --- 내용을 명시적으로 구분하고 싶을 때
3. 리스트 : 순서가 있는 리스트
            1.
              1-1
              1-2
            2.
            3.
            순서가 없는 리스트
            - ~~
                - ~~
                - ~~
4. 수식(코드) : ` 빽팁 3개 , 빽팁 -> ESC 아래 Tab위
예) ```print(hello world)```
5. url, 사진 : url -> [] title, ()url
        이미지 -> ![] title, ()url
6. 글자폰트 : 굵게 -> ** **
            기울이기 -> * *
            취소선 -> ~~ 
