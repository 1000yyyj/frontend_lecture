// 드래그 대상 요소
const boxElement = document.querySelector(".box");

// 드래그 시작 시점의 마우스 포인터 위치
const initialMousePos = { x: 0, y: 0 };
// 이동할 거리 계산용 좌표
const movePos = { x: 0, y: 0 };

// mousemove 이벤트 핸들러
const move = (e) => {
  // 현재(드래그시점) 마우스 포인터 위치 - 드래그 시작 시점의 포인터 위치
  movePos.x = e.clientX - initialMousePos.x;
  movePos.y = e.clientY - initialMousePos.y;

  // absolute는 레이아웃에 영향 주므로 translate 사용하여 이동
  boxElement.style.transform = `translate(${movePos.x}px, ${movePos.y}px)`;
};

// mousedown 이벤트 발생 시 드래그 시작 시점의 마우스 포인터 좌표 저장
boxElement.addEventListener("mousedown", (e) => {
  // 이동 거리 계산을 위해 mousedown 이벤트가 발생(드래그 시작)하면
  // 드래그 시작 시점의 마우스 포인터 좌표(e.clientX -> 뷰포트 상의 포인터좌표) 저장
  // 한번이상 이동한 경우 move에서 translate로 이동한 상태이므로
  // movePos만큼을 빼줘야함
  initialMousePos.x = e.clientX - movePos.x;
  initialMousePos.y = e.clientY - movePos.y;

  // mousedown 이벤트가 발생한 상태에서 mousemove가 발생하면 이동
  document.addEventListener("mousemove", move);
});

// mouseup 이벤트 발생 시 mousemove 이벤트를 제거하여 이동 그만
document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", move);
});
