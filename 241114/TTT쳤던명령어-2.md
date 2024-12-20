# 1. 기본 branch 생성 및 합병
* 가지처럼 새로운 작업을 시작하고, 완료된 작업을 기존 작업에 합병할 수 있습니다.
* 협업을 할 때 여러 사람이 동시에 작업할 수 있도록 하기 위해 사용합니다.
* 기본 branch는 main이다. 예전에는 master였으나, 최근에는 main으로 변경되었습니다.
* 처음에 init을 하게 되면 main branch가 생성되지 않습니다. commit을 하게 되면 main branch가 생성됩니다.
* 개별적인 작업 공간을 만든다는 의미는 이전 main에서 파일과 폴더를 복사(실제로는 복사해오는 것은 아니고 수정 내역만 파악하는 것입니다)해오고, 여기서 작업을 한 것이 다른 branch에 영향을 주지 않는다는 것입니다.

## 1.1 실습
```shell
# 저는 이곳에서 작업하고 Ctrl + C, Shift + Insert로 붙여넣기를 하겠습니다.
# 나중에 실습한 폴더는 삭제하겠습니다.
mkdir branch
cd branch
git init

# main branch 생성
# window powershell: echo "main" > README.md
# git bash, mac, linux: touch README.md
touch README.md
echo "main" > README.md
git add .
git commit -m '1'

# branch 확인 및 생성
git branch
git branch a
git checkout a
echo "a" > a.txt

# 다른 브렌치에서 확인
# 1. 
git checkout main
# a.txt가 있음 확인: a branch에서 사용한 명령어는 다른 브랜치에서도 사용한 명령어와 같습니다. commit해야 반영되는 것입니다.
git checkout a
git add .
ls

# 2.
git checkout main
# a.txt가 있음 확인
git checkout a
git commit -m '2'
ls

# 3.
git checkout main
# a.txt가 없음 확인: 한 번 commit이 일어난 지점부터는 다른 branch에서 작업한 내용이 반영되지 않습니다.
git checkout a
ls

# branch 합병
# 합병이 될 branch로 이동
git checkout main
ls
git merge a
ls
git granch
# a가 살아 있습니다. 그런데 이미 코드가 합쳐졌으므로 삭제해도 됩니다.

# branch 삭제
git branch -d a
git branch
```

## 1.2 미션
* main branch를 생성합니다.
* a branch를 생성하고 a.txt 파일을 생성합니다.
* b branch를 생성하고 b.txt 파일을 생성합니다.
* main branch로 이동하여 a branch를 합병합니다.
* main branch로 이동하여 b branch를 합병합니다.
* a branch를 삭제합니다.
* b branch를 삭제합니다.

```shell
cd ..
mkdir mission
cd mission
mkdir test1
cd test1

git init
touch README.md
echo "main" > README.md
git add .
git commit -m '1'

git branch a
git branch b

git checkout a
echo "a" > a.txt

git checkout b
echo "b" > b.txt

git checkout main
git merge a
git merge b

git branch -d a
git branch -d b
```

# 2. 충돌

## 2.1 실습

```shell
mkdir conflict
cd conflict
git init

touch README.md
echo "main" > README.md
git add .
git commit -m '1'

git branch a
git branch b

git checkout a
echo "main a" > README.md
git add .
git commit -m '2'

git checkout b
echo "main b" > README.md
git add .
git commit -m '3'

git checkout main
git merge a
git merge b

# 충돌 발생
# 충돌이 발생되면 branch 이름이 아래와 같이 수정됩니다.
# folder(main)$ => folder(main|MERGING)$
# 충돌이 발생한 파일을 열어서 수정하고 저장합니다.
git add .
git commit -m '4'
# 충돌이 해결되었기 때문에 다시 branch 이름이 folder(main)$로 변경됩니다.

# branch 삭제
git branch -d a
git branch -d b
```

## 2.2 미션
* main branch를 생성합니다.
* a branch를 생성하고 index.html 파일을 '<h1>hello a</h1>'로 생성합니다.
* b branch를 생성하고 index.html 파일을 '<h1>hello b</h1>'로 생성합니다.
* main branch로 이동하여 a branch를 합병합니다.
* main branch로 이동하여 b branch를 합병합니다.
* 충돌이 발생하면 a branch의 내용을 유지합니다.
* a branch를 삭제합니다.
* b branch를 삭제합니다.

```shell
cd ..
mkdir test2
cd test2

git init
touch README.md
echo "main" > README.md
git add .
git commit -m '1'

git branch a
git branch b

git checkout a
echo "<h1>hello a</h1>" > index.html
git add .
git commit -m '2'

git checkout b
echo "<h1>hello b</h1>" > index.html
git add .
git commit -m '3'

git checkout main
git merge a
git merge b

# 충돌 발생
# 충돌이 발생되면 branch 이름이 아래와 같이 수정됩니다.
# folder(main)$ => folder(main|MERGING)$
# 충돌이 발생한 파일을 열어서 수정하고 저장합니다.
git add .
git commit -m '4'
# 충돌이 해결되었기 때문에 다시 branch 이름이 folder(main)$로 변경됩니다.

# branch 삭제
git branch -d a
git branch -d b
```

# 3. 그 외 명령어

## 3.1 reset
* commit을 특정 시점으로 되돌립니다.
* reset은 되돌릴 commit 이후의 commit은 삭제됩니다.
* reset 명령어는 실무에서 거의 사용하지 않음, 개인프로젝트에서도 사용하지 않는 것을 권고. 만약 회사에서 쓴다면 hard는 사용하면 안되고 soft 정도만 사용할 것.
* 이전 commit 내용을 보고 다시 작성해서 그 뒤로 commit을 하는 것을 권고.
* reset을 잘못사용하면 다른 사람들의 작업 내용에 문제가 생긴다. (삭제 되거나, 합칠 브랜치가 사라지거나)
이것을 해결하는 것은 매우 어렵다.
* 아래 명령어는 내가 수정한 파일이 너무 문제가 생겼을때 한번에 원격에 있는 코드로 초기화 시키고 싶을 때 사용한다.

```shell
git reset --hard origin/main
```

* VSCode에서 Source Control에서도 부분 reset을 할 수 있습니다. 자주 사용됩니다.

## 3.2 stash
* 작업 중인 내용을 임시로 저장합니다.
* GUI 프로그램 사용하시면 임시 저장하는 버튼이 이 기능을 수행합니다. 대부분은 이 기능이 있습니다.
* 실무에서 회사 우선순위에 따라 작성해야 하는 code가 변경되기도 하니 알아두셔야 합니다.
* VSCode에서 Source Control에서도 stash를 할 수 있습니다. `Changes` 버튼 옆에 `Stash` 버튼이 있습니다.

```shell
mkdir stash
cd stash
git init
touch README.md
echo "main" > README.md
git add .
git commit -m '1'

echo "a" > a.txt
git add .
git stash
git stash list

echo "b" > b.txt
git add .
git commit -m '2'

# a가 없는 것을 확인해야 합니다!
git stash list
git stash pop
# a가 나타난 것을 확인해야 합니다!
git stash list
# 아무것도 없습니다!
```

## 3.3 revert

```shell
mkdir revert
cd revert
git init
touch README.md
echo "main" > README.md
git add .
git commit -m '1'

echo "main one" > README.md
git add .
git commit -m '2'

echo "main one two" > README.md
git add .
git commit -m '3'

git log

# 직전으로 되돌아가고 싶다!?
# 9c830d52d89ec2d2d73315259c8c77f1f210f52b 로 되돌아 가고 싶다!?
git revert 9c830d52d89ec2d2d73315259c8c77f1f210f52b

# (main|REVERTING)$로 변경됩니다.
# 수정하고 저장합니다.
git add .
git commit -m '4'
# (main)$로 변경됩니다.
git log
```

## 3.4 cherry-pick

* 다른 branch에서 특정 commit을 가져옵니다.
* 별도의 실습은 하지 않습니다.
```shell
git branch cherry
git checkout cherry
# 파일 수정 -> commit
# 파일 생성 -> commit
git push
git log
git switch main
git cherry-pick logid
```

# 4. 협업
## 4.1 실습

- 해당 자료는 제주코딩베이스캠프의 유튜브 채널에서 제공되는 [영상](https://youtu.be/1e9MaoflQ3A)입니다.

- 대상
  - 팀 프로젝트 투입 전 팀장, 팀원
  - 기본적인 Git 명렁어는 알고 있는 사람 대상의 강의입니다.

- 내용
  - PR을 통한 협업
  - 필수적인 것만 반복 설명
  - 필수적인 것을 제외한 것, 템플릿 설정 등은 설명하지 않습니다.

- 상세 영상
  - 협업에 관한 더 상세한 영상: [GitHub으로 협업하기 1편](https://youtu.be/6sBNPvxjyt0)
  - 무료 GitHub 강의: [알잘딱깔센 GitHub](https://inf.run/HQk6)

- (팀장 + 팀원) 팀 편성 후 프로세스
  1. 커뮤니케이션 도구 선택(디스코드, 슬랙, 지라, 노션, 피그마, 피그잼 등) 및 룰 만들기
  2. 오거나이제이션 만들기(수업은 개인 repo에서 진행)
  3. GitHub 위키(코드 컨벤션 세팅)
  4. GitHub 프로젝트(GitHub Project 생성 및 공개 설정)
  5. GitHub 이슈 생성

- (팀원) 이슈 생성(업무 할당) 후 프로세스
  1. 이슈 생성
  2. 브랜치 생성
  3. 작업 진행(commmit은 여러번 할 수 있습니다.)
  4. PR 생성
  5. Merge
  6. 브랜치 삭제
  7. 반복

- 강의자료 짧은 링크: https://weniv.link/O1f8Hd

```shell

# GitHub Repository 생성
# 실제 팀 프로젝트는 Organization을 생성하여 진행하시길 권장합니다.

blog

###########################

# description: 협업 프로젝트를 위한 실습용 repo
# Add a README file 체크하고 repo 생성

code > local > https에 있는 url 복사

# 여러분 컴퓨터에 폴더를 하나 생성하셔서 VSCode로 열어 아래 명령어를 입력해주세요.

git clone 여러분URL .
git clone https://github.com/paullabkorea/blog.git .

###########################

# GitHub Wiki > Create the first page

'''
GPT 또는 Claude를 사용한 코드 컨벤션 작성 프롬프트

나는 blog를 만드는 프로젝트를 진행하고 있어. 이 프로젝트는 백엔드는 Django, 프론트엔드는 React로 구성되어 있어. 

나는 프론트엔드 팀에 팀장이야. 프론트엔드 레포지토리의 wiki에 작성할 코드 컨벤션을 작성해줘. 포함해야 할 내용은 아래와 같아.

1. JavaScript, JSX 등의 스타일 가이드
2. VSCode의 Prettier 등 사용 익스텐션과 가이드를 함께 넣어줘.
3. Git 관리, 깃모지 및 컴밋 메시지 가이드

이 내용을 작성해줘.
'''

###########################

# blog > Project > New Project
# team planning > @paullabkorea's blog project
# 기본 설정이 private입니다! 이걸로 면접을 볼 때에는 public으로 설정해주세요.
# 오른쪽 상단 ... 클릭 > settings > Danger zone > public으로 변경해주세요.

###########################

# blog > Issues > New issue

# Add a title: one
# Add a description: one

# 오른쪽 사이드바
# assignees: 팀원 선택(지금 나밖에 선택이 안됩니다.)
# lables: enhancement, document 중 하나 선택하세요.
# projects: team planning 선택하세요. 저희 이름은 blog project입니다.

# 여기까지 작성이 되었다면 submit new issue를 눌러주세요.

# 이렇게 하셨으면 project에 들어가보시면 one이 생성되어 있습니다.
# Todo, In progress, Done으로 옮겨보세요.

###########################

# 오른쪽 사이드 바에 있는 Development에 있는 create a branch를 눌러주세요.
# 모달이 떴으면 create branch 버튼을 클릭하겠습니다. 지금 현재 '1-one' 브랜치 입니다.

# 아래와 같은 텍스트를 복사하라고 떴을 겁니다. 복사해둡니다.
'''
git fetch origin
git checkout 1-one
'''

###########################

# 전략을 선택해야 합니다.
# 팀장이 팀원들과 회의해서 전략을 어떤 전략을 사용하실지 결정하세요.

# GitHub Flow + develop branch 전략을 보통 선택합니다.
git branch
git branch dev
git push --set-upstream origin dev


# 이렇게 해주시면 GitHub에서도 dev 브랜치가 생성되어 있습니다.
# blog 페이지로 가보면 main이라고 되어 있는 곳을 클릭해보면 dev, 1-one, main이 있습니다.

# default branch를 dev로 변경해야 합니다. 아니면 merge할 때 main으로 병합할껀지 먼저 물어봅니다. 그래서 dev로 변경해야 합니다.
# settings > General > Default branch > dev로 변경
# 이제부터 merge는 dev로 됩니다!

###########################

# fetch origin: 원격 저장소의 변경사항을 로컬 저장소로 가져옵니다.
# checkout 1-one: 1-one 브랜치로 이동합니다.

git branch
git fetch origin
git checkout 1-one

###########################

# 작업을 진행합니다.

touch 001.html
touch 002.html
git add .
git commit -m '1'
git push


###########################

# GitHub에 들어가면 안내문구가 떠있습니다.
# Compare & pull request 버튼을 클릭합니다.
# 내용을 확인하고 create pull request 버튼을 클릭합니다.
# Merge pull request 버튼을 클릭합니다.
# Confirm merge 버튼을 클릭합니다.
# Delete branch 버튼을 클릭합니다.

###########################

# branch 삭제
git checkout dev
git pull
git branch -d 1-one
git branch

###########################

# 여기까지가 1 circle
# 이것을 반복하면 됩니다.

###########################

# Issue 생성 > New issue

# add a title: two
# add a description: two

# assignees: 팀원 선택
# lables: enhancement, document 중 하나 선택하세요.
# projects: team planning 선택하세요. 저희 이름은 blog project입니다.

# 여기까지 작성이 되었다면 submit new issue를 눌러주세요.

###########################

# 오른쪽 사이드 바에 있는 Development에 있는 create a branch를 눌러주세요.
# merge한게 2가 되기 때문에 지금은 3-two라고 나올겁니다.

# create a branch 버튼을 클릭하겠습니다. 지금 현재 '3-two' 브랜치 입니다.

'''
git fetch origin
git checkout 3-two
'''

###########################

git fetch origin
git checkout 3-two

###########################

# 작업을 진행합니다.

touch 003.html
touch 004.html
git add .
git commit -m '2'
git push

###########################

# GitHub에 들어가면 안내문구가 떠있습니다.
# Compare & pull request 버튼을 클릭합니다.
# 내용을 확인하고 create pull request 버튼을 클릭합니다.
# Merge pull request 버튼을 클릭합니다.
# Confirm merge 버튼을 클릭합니다.
# Delete branch 버튼을 클릭합니다.

###########################

# branch 삭제
git checkout dev
git pull
git branch -d 3-two
git branch

###########################

# 여기까지가 2 circle
# 이것을 반복하면 됩니다.

###########################

# Issue 생성 > New issue

# add a title: three
# add a description: three

# assignees: 팀원 선택
# lables: enhancement, document 중 하나 선택하세요.
# projects: team planning 선택하세요. 저희 이름은 blog project입니다.

# 여기까지 작성이 되었다면 submit new issue를 눌러주세요.

###########################

# 오른쪽 사이드 바에 있는 Development에 있는 create a branch를 눌러주세요.
# merge한게 2가 되기 때문에 지금은 3-two라고 나올겁니다.

# create a branch 버튼을 클릭하겠습니다. 지금 현재 '3-two' 브랜치 입니다.

'''
git fetch origin
git checkout 5-three
'''

###########################

git fetch origin
git checkout 5-three

###########################

# 작업을 진행합니다.

touch 005.html
touch 006.html
git add .
git commit -m '3'
git push

###########################

# GitHub에 들어가면 안내문구가 떠있습니다.
# Compare & pull request 버튼을 클릭합니다.
# 내용을 확인하고 create pull request 버튼을 클릭합니다.
# Merge pull request 버튼을 클릭합니다.
# Confirm merge 버튼을 클릭합니다.
# Delete branch 버튼을 클릭합니다.

###########################

# branch 삭제
git checkout dev
git pull
git branch -d 5-three
git branch

###########################

# 여기까지가 3 circle
# 이것을 반복하면 됩니다.
```

## 4.2 미션
* blog2 GitHub Repository를 생성합니다.
* blog2 GitHub Wiki에 코드 컨벤션을 작성합니다.
* blog2 GitHub Project를 생성합니다.
* blog2 GitHub Issues에 one, two, three를 생성합니다.
* one, two, three를 작업하고 PR을 생성합니다.
* one은 one.html, two는 two.html, three는 three.html을 생성합니다.
* PR을 Merge합니다.
* 브랜치를 repo와 local 모두 삭제합니다.

# 5. fork
링크: https://www.books.weniv.co.kr/github/chapter02/02-6
* fork는 다른 사람의 repository를 복사하는 것입니다.
* fork한 repository는 원본 repository와는 다른 repository입니다.
* 여기에 push를 하더라도 잔디가 심기지는 않습니다.
* 만약 원본에 반영하고 싶다면 code 안에서 contiribute 버튼을 눌러 pr을 보내야 합니다.
* 보내면 해당 repository의 owner가 pr을 확인하고 merge할지 말지 결정합니다.
* 실습: https://github.com/weniv/erd/

# 6. 그 외에 사용되는 것들
* Gitmoji 익스텐션(:lipstick:, :memo:)
* GitLens 익스텐션
* Git Graph 익스텐션
