# PostCSS을 이용한 TODO APP

## 1. 기술 스택
| 기술 스택 | 사용 용도 |
| --- | --- |
|React (CRA with yarn)|캡슐화된 컴포넌트 및 상호작용이 자주 일어나는 UI를 위한 라이브러리|
|react-icons|아이콘 이모티콘 사용을 위한 라이브러리|
|uuid|유일한 key값을 주기 위해 사용한 라이브러리|

<br>


## 2. 핵심 기능 및 로직
### (1) tailwindCSS를 참고해서 만든 contextAPI를 이용한 다크모드 구현
> [tailwindCSS - Dark Mode](https://tailwindcss.com/docs/dark-mode)
- tailwindCSS에서는 최상위 html 태그에 class 이름을 부여하는 방식으로 다크모드를 구분함
- 위 방식을 참고해서 html 태그에 class를 추가하고 localStorage에 다크모드 여부를 담아놓은걸로 구분해서 화면 UI를 변경

```javascript
...
// 마운트 시 로컬스토리지 및 브라우저를 확인해서 다크모드 구분하기
useEffect(() => {
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, [])
...

// 다크 모드를 핸들링 하면서 html 태그 및 로컬 스토리지에 어떤 상태인지 저장하기
function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
```

<br>


### (2) 필터 기능을 통해서 해야할 일, 완료한 일, 전체를 구분 및 로컬 스토리지에 저장하기
- All, Active, Completed 상태에 따라서 필터링 기능 구현
- 로컬 스토리지에 상태값을 저장해서 세션이 종료되어도 할 일 리스트 보존 구현

```javascript
// 로컬 스토리지에서 저장되있는 할 일 리스트 불러오기
const [todoList, setTodoList] = useState(() => readTodoListFromLocalStorage());

function readTodoListFromLocalStorage() {
  const todoList = localStorage.getItem('todoList');
  return todoList ? JSON.parse(todoList) : [];
}

// 상태값에 따라서 필터링 완료된 할 일 리스트를 불러오기
const filtered = getFilteredItems(todoList, filter);

function getFilteredItems(todoList, filter) {
  if (filter === 'All') {
    return todoList;
  }
  return todoList.filter((todo) => todo.isCompleted === (filter === 'Active' ? false : true));
}
```
