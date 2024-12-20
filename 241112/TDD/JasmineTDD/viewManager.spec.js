describe("클릭 이벤트, 뷰를 관리하는 뷰 매니저를 테스트합니다", () => {
  it("viewManager의 인자로 textManager가 잘 전달되었는지 확인합니다", () => {
    const textManager = null;

    const btnEl = document.createElement("button");
    const viewerEl = document.createElement("strong");
    const inpEl = document.createElement("input");

    const actual = () =>
      new ViewManager(textManager, { btnEl, viewerEl, inpEl });
    // 매쳐 함수. throw error가 잘 작동하는지 검증
    expect(actual).toThrowError();
  });

  it("viewManager의 요소 인자들이 잘 전달되었는지 확인합니다", () => {
    const textManager = new TextManager();

    const btnEl = null;
    const viewerEl = null;
    const inpEl = null;

    const actual = () =>
      new ViewManager(textManager, { btnEl, viewerEl, inpEl });

    expect(actual).toThrowError();
  });

  const textManager = new TextManager();
  const btnEl = document.createElement("button");
  const viewerEl = document.createElement("strong");
  const inpEl = document.createElement("input");
  const viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpEl });

  it("클릭 이벤트가 발생했을 때, changeValue 함수가 제대로 호출이 되는지 확인합니다", () => {
    // 특정한 모듈의 함수를 감시
    spyOn(viewManager, "changeValue");

    btnEl.click();

    // toHaveBeenCalled: 함수가 호출된 적이 있는지 판별
    expect(viewManager.changeValue).toHaveBeenCalled();
  });

  it("changeValue 함수가 호출되었을 때, updateView 함수가 호출되는지 확인합니다", () => {
    spyOn(viewManager, "updateView");

    viewManager.changeValue();

    expect(viewManager.updateView).toHaveBeenCalled();
  });
});
