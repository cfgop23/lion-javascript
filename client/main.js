/* global gsap */

import {
  getNode as $,
  attr,
  changeColor,
  clearContents,
  delayP,
  lion,
  renderEmptyCard,
  renderSpinner,
  renderUserCard,
} from './lib/index.js';

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);
  try {
    await delayP();
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });
    // $('.loadingSpinner').remove();
    const response = await lion.get('http://localhost:3000/users');
    const userData = response.data;

    userData.forEach((item) => renderUserCard(userCardInner, item));
    changeColor('.user-card');
    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    });
  } catch (error) {
    renderEmptyCard(userCardInner);
  }
} // 함수로 따로 분리하는 이유: crud를 하더라도 화면의 변화는 없다. 그래서 화면에 리렌더링을 위해 사용

renderUserList();

function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');
  if (!button || !article) return;

  const id = attr(article, 'data-index').slice(5);
  lion.delete(`http://localhost:3000/users/${id}`).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDelete);
