const timeline = document.getElementById('timeline');
let finalBlurb = null;
let updateInterval = null;

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const addShowClassToItems = () => {
  const items = document.querySelectorAll('#timeline ul li');
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });
};

const updateTimestamp = () => {
    const currentDate = new Date().toLocaleString();
    finalBlurb.querySelector('h3').textContent = `${currentDate}: You visited my website!`;
    finalBlurb.querySelector('p').textContent = `Thanks for reading.`;
};

const addFinalNode = () => {
    const finalNode = document.createElement('li');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const icon = document.createElement('i');
    const p = document.createElement('p');
    icon.classList.add('fas', 'fa-chevron-right');
    h3.appendChild(icon);
    div.appendChild(h3);
    div.appendChild(p);
    finalNode.appendChild(div);
    timeline.querySelector('ul').appendChild(finalNode);
    setInterval(() => {
        const now = new Date().toLocaleString();
        finalNode.querySelector('h3').textContent = `${now}: You visited my website!`;
        finalNode.querySelector('p').textContent = `Thanks for reading.`;
    }, 1000);
}

const run = () => {
  addShowClassToItems();
  addFinalNode(); 
};

window.addEventListener('load', run);
window.addEventListener('resize', () => {
  addShowClassToItems();
});

window.addEventListener('scroll', () => {
  addShowClassToItems();
});
