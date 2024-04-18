let data = {
  fullName: "Vũ Đình Linh",
  gender: "Nam",
  enterYear: "2021",
  class: "Khoa học máy tính 03-K66",
  eduLevel: "Học đại trà",
  course: "66",
  program: "Khoa học Máy tính 2021",
  email: "linh.vd215415@sis.hust.edu.vn",
  facultyInstitute: "Trường Công nghệ thông tin và Truyền thông",
  studyStatus: "Học"
}

let localData = localStorage.getItem('dlir_data')

if (localData) {
  data = JSON.parse(localData)
}

const container = document.getElementById("container")
if (container) {
  container.innerHTML = `
  <div class="special-text info-title"> 
      <p>Họ và tên&emsp;: <span class="info-content">${data.fullName}</span></p>
      <p>Năm vào trường&emsp;: <span class="info-content">${data.enterYear}</span></p>
      <p>Bậc đào tạo&emsp;: <span class="info-content">${data.eduLevel}</span></p>
      <p>Chương trình&emsp;: <span class="info-content">${data.program}</span></p>
      <p>Khoa/Viện quản lý&emsp;: <span class="info-content">${data.facultyInstitute}</span></p>
      <p>Tình trạng học tập&emsp;: <span class="info-content">${data.studyStatus}</span></p>
  </div>
  <div class="info-title">
      <p>Giới tính&emsp;: <span class="info-content">${data.gender}</span></p>
      <p>Lớp&emsp;: <span class="info-content">${data.class}</span></p>
      <p>Khóa học&emsp;: <span class="info-content">${data.course}</span></p>
      <p>Email&emsp;: <span class="info-content">${data.email}</span></p>
  </div>
`
}

//edit html
if (document.querySelector('#my-form')) {
  const $ = (querySelector) => {
    return document.querySelector('#my-form #' + querySelector)
  }
  $('fname').value = data.fullName
  $('gender').value = data.gender
  $('enter-year').value = data.enterYear
  $('class').value = data.class
  $('eduLevel').value = data.eduLevel
  $('course').value = data.course
  $('program').value = data.program
  $('email').value = data.email
  $('facultyInstitute').value = data.facultyInstitute
  $('studyStatus').value = data.studyStatus
}

var submitBtn = document.getElementById("submit-btn")
var cancelBtn = document.getElementById("cancel-btn")


if (submitBtn) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
  
    var name = document.getElementById("fname").value;
    var gender = document.getElementById("gender").value;
    var enterYear = document.getElementById("enter-year").value;
    var className = document.getElementById("class").value;
    var eduLevel = document.getElementById("eduLevel").value;
    var course = document.getElementById("course").value;
    var program = document.getElementById("program").value;
    var email = document.getElementById("email").value;
    var facultyInstitute = document.getElementById("facultyInstitute").value;
    var studyStatus = document.getElementById("studyStatus").value;
  
    data.fullName = name
    data.gender = gender
    data.enterYear = enterYear
    data.className = className
    data.eduLevel = eduLevel
    data.course = course
    data.program = program
    data.email = email
    data.facultyInstitute = facultyInstitute
    data.studyStatus = studyStatus

    localStorage.setItem('dlir_data', JSON.stringify(data))

    window.location.href = "/"
  })
}

if (cancelBtn) {
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "/"
  })
}

