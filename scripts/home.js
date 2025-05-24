const params = new URLSearchParams(document.location.search);

const modelSuccessRecordEl = document.querySelector(".model-success-record");
const closeModelSuccessRecordEl = document.querySelector(".model-success-record .success-record-wrapper .close");
const isOpenModelSuccessRecord = params.get('open-model-success-record');
if (isOpenModelSuccessRecord) {
  window.scrollTo({ top: 220 })
  modelSuccessRecordEl.classList.add("open")
}

const closeModelSuccessRecord = () => {
  modelSuccessRecordEl.classList.remove("open")
}

closeModelSuccessRecordEl.addEventListener("click", () => closeModelSuccessRecord())




const modelSendQuestionEl = document.querySelector(".model-send-question");
const closeModelSendQuestionEl = document.querySelector(".model-send-question .send-question-wrapper .close");
const isOpenModelSendQuestion = params.get('open-model-send-question');
if (isOpenModelSendQuestion) {
  window.scrollTo({ top: 220 })
  modelSendQuestionEl.classList.add("open")
}

const closeModelSendQuestion = () => {
  modelSendQuestionEl.classList.remove("open")
}

closeModelSendQuestionEl.addEventListener("click", () => closeModelSendQuestion())