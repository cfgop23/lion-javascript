/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;
String(YEAR);
YEAR + '';

// undefined, null
String(null);
null + '';

String(undefined);
undefined + '';

// boolean
let isClicked = true;
String(isClicked);
isClicked + '';

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
Number(friend); // NaN
+friend;

// null
let bankBook = null;
Number(bankBook); // 0
+bankBook;

// boolean
let cute = false;
Number(cute);
+cute;

// string
let num = '123';
Number(num);
+num;
num * 1;
num / 1;

// numeric string
let width = '105.5cm';
Number(width); // NaN

width = window.parseInt(width, 10); // 문자를 만나게 되는 순간 뒷부분 전부 삭제, 진수도 넣는게 좋음
width = window.parseFloat(width, 10);

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
Boolean(''); // false

// 위에 나열한 것 이외의 것들
Boolean(' '); // true

!!''; // 암시적 형 변환
