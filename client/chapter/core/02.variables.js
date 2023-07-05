/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */

let admin;
let name = 'John';
admin = name;
// alert(admin);

// 참조에 의한 복사
name = 'tiger';
admin = name;
name = 'beom';
// console.log(admin);

const ourPlanetName = 'Earth';
const currentUserName = 'tiger';

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - 구매 제품 가격의 총 합
// - 1년 기준 일(day)자 수
// - 구매 결제 여부
// - 구매 결제 내역
// - 브랜드 접두사
// - 오늘의 운세
// - 상품 정보

/* variables ----------------------------------------------------------- */
let calcProductPriceQuantity;
let totalProductPrice;
let isPayment = true;
let paymentHistory;
let fortuneOfToday;

/* constant variables -------------------------------------------------- */
const BRAND_PREFIX = 'NIKE';
const productInfo = 'desc';
const DAYS_PER_YEAR = 365;
