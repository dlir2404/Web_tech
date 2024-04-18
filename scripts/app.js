const $ = (querySelector) => {
  return document.querySelector(querySelector)
}

let TTSV_default = {
  fullName: "Vũ Đình Linh",
  gender: "Nam",
  enterYear: "2021",
  className: "Khoa học máy tính 03-K66",
  eduLevel: "Học đại trà",
  course: "66",
  program: "Khoa học Máy tính 2021",
  email: "linh.vd215415@sis.hust.edu.vn",
  facultyInstitute: "Trường Công nghệ thông tin và Truyền thông",
  studyStatus: "Học"
}

const container = $("#container")
function setData(a) {
  container.innerHTML = `
  <div class="special-text info-title"> 
      <p>Họ và tên&emsp;: <span class="info-content">${a.fullName}</span></p>
      <p>Năm vào trường&emsp;: <span class="info-content">${a.enterYear}</span></p>
      <p>Bậc đào tạo&emsp;: <span class="info-content">${a.eduLevel}</span></p>
      <p>Chương trình&emsp;: <span class="info-content">${a.program}</span></p>
      <p>Khoa/Viện quản lý&emsp;: <span class="info-content">${a.facultyInstitute}</span></p>
      <p>Tình trạng học tập&emsp;: <span class="info-content">${a.studyStatus}</span></p>
  </div>
  <div class="info-title">
      <p>Giới tính&emsp;: <span class="info-content">${a.gender}</span></p>
      <p>Lớp&emsp;: <span class="info-content">${a.className}</span></p>
      <p>Khóa học&emsp;: <span class="info-content">${a.course}</span></p>
      <p>Email&emsp;: <span class="info-content">${a.email}</span></p>
  </div>
  `
}

var TTSV = { ...TTSV_default }

setData(TTSV_default)

var editBtn = $("#editBtn")
var submitBtn = $("#submit-btn")
var cancelBtn = $("#cancel-btn")
var resetBtn = $("#resetBtn")

var btnGroup = $("#btn-group")

editBtn.addEventListener("click", (e) => {
  e.preventDefault()

  btnGroup.innerHTML = `
  <div id='submit-btn'>< OK ></div>
  <div id='cancel-btn'>< Cancel ></div>
  <div id='resetBtn'>< Reset ></div>
  `
  submitBtn = $("#submit-btn")
  cancelBtn = $("#cancel-btn")
  resetBtn = $("#resetBtn")

  addEventListenerToBtns(submitBtn, cancelBtn, resetBtn)

  container.innerHTML = `
  <div class="special-text info-title"> 
      <p>Họ và tên&emsp;: <input class="info-content" id='fullName' value='${TTSV.fullName}'></input></p>
      <p>Năm vào trường&emsp;: <input class="info-content" id='enterYear' value='${TTSV.enterYear}'></input></p>
      <p>Bậc đào tạo&emsp;: 
        <select class="info-content" id='eduLevel' value='${TTSV.eduLevel}'>
          <option value="Học đại trà">Học đại trà</option>
          <option value="Học chất lượng cao">Học chất lượng cao</option>
        </select>
      </p>
      <p>Chương trình&emsp;: <input class="info-content" id='program' value='${TTSV.program}'></input></p>
      <p>Khoa/Viện quản lý&emsp;: 
        <select class="info-content" id='facultyInstitute' value='${TTSV.facultyInstitute}'>
          <option value="Trường Công nghệ thông tin và Truyền thông">Trường Công nghệ thông tin và Truyền thông</option>
          <option value="Trường Cơ khí">Trường Cơ khí</option>
          <option value="Trường Điện - Điện tử">Trường Điện - Điện tử</option>
          <option value="Trường Hoá và Khoa học sự sống">Trường Hoá và Khoa học sự sống</option>
          <option value="Trường Vật liệu">Trường Vật liệu</option>
          <option value="Khoa Toán - Tin">Khoa Toán - Tin</option>
          <option value="Khoa Vật lý Kỹ thuật">Khoa Vật lý Kỹ thuật</option>
          <option value="Viện Kinh tế và Quản lý">Viện Kinh tế và Quản lý</option>
          <option value="Khoa Ngoại ngữ">Khoa Ngoại ngữ</option>
          <option value="Khoa Khoa học và Công nghệ Giáo dục">Khoa Khoa học và Công nghệ Giáo dục</option>
          <option value="Khoa Giáo dục Quốc phòng & An ninh">Khoa Giáo dục Quốc phòng & An ninh</option>
          <option value="Khoa Giáo dục Thể chất">Khoa Giáo dục Thể chất</option>
          <option value="Khoa Lý luận Chính trị">Khoa Lý luận Chính trị</option>
        </select>
      </p>
      <p>Tình trạng học tập&emsp;: 
        <select class="info-content" id='studyStatus' value='${TTSV.studyStatus}'>
          <option value="Học">Học</option>
          <option value="Tốt nghiệp">Tốt nghiệp</option>
        </select>
      </p>
  </div>
  <div class="info-title">
      <p>Giới tính&emsp;: 
        <select class="info-content" id='gender' value='${TTSV.gender}'>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select></p>
      <p>Lớp&emsp;: <input class="info-content" id='className' value='${TTSV.className}'></input></p>
      <p>Khóa học&emsp;: 
        <select class="info-content" id='course' value='${TTSV.course}'>
          <option value="66">66</option>
          <option value="65">65</option>
          <option value="64">64</option>
          <option value="63">63</option>
          <option value="62">62</option>
          <option value="61">61</option>
          <option value="60">60</option>
          <option value="59">59</option>
          <option value="58">58</option>
          <option value="57">57</option>
          <option value="56">56</option>
          <option value="55">55</option>
          <option value="54">54</option>
          <option value="53">53</option>
          <option value="52">52</option>
          <option value="51">51</option>
          <option value="50">50</option>
          <option value="49">49</option>
          <option value="48">48</option>
          <option value="47">47</option>
          <option value="46">46</option>
          <option value="45">45</option>
          <option value="44">44</option>
          <option value="43">43</option>
          <option value="42">42</option>
          <option value="41">41</option>
          <option value="40">40</option>
          <option value="39">39</option>
          <option value="38">38</option>
          <option value="37">37</option>
          <option value="36">36</option>
          <option value="35">35</option>
          <option value="34">34</option>
          <option value="33">33</option>
          <option value="32">32</option>
          <option value="31">31</option>
          <option value="30">30</option>
          <option value="29">29</option>
          <option value="28">28</option>
          <option value="27">27</option>
          <option value="26">26</option>
          <option value="25">25</option>
          <option value="24">24</option>
          <option value="23">23</option>
          <option value="22">22</option>
          <option value="21">21</option>
          <option value="20">20</option>
          <option value="19">19</option>
          <option value="18">18</option>
          <option value="17">17</option>
          <option value="16">16</option>
          <option value="15">15</option>
          <option value="14">14</option>
          <option value="13">13</option>
          <option value="12">12</option>
          <option value="11">11</option>
          <option value="10">10</option>
          <option value="9">9</option>
          <option value="8">8</option>
          <option value="7">7</option>
          <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
          <option value="0">0</option>
        </select>
      </p>
      <p>Email&emsp;: <input class="info-content" id='email' value='${TTSV.email}'></input></p>
  </div>
  `
})

function addEventListenerToBtns(submitBtn, cancelBtn, resetBtn) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

    var name = $("#fullName").value;
    var gender = $("#gender").value;
    var enterYear = $("#enterYear").value;
    var className = $("#className").value;
    var eduLevel = $("#eduLevel").value;
    var course = $("#course").value;
    var program = $("#program").value;
    var email = $("#email").value;
    var facultyInstitute = $("#facultyInstitute").value;
    var studyStatus = $("#studyStatus").value;

    TTSV.fullName = name
    TTSV.gender = gender
    TTSV.enterYear = enterYear
    TTSV.className = className
    TTSV.eduLevel = eduLevel
    TTSV.course = course
    TTSV.program = program
    TTSV.email = email
    TTSV.facultyInstitute = facultyInstitute
    TTSV.studyStatus = studyStatus
    setData(TTSV)
    btnGroup.innerHTML = ''

    console.log(">>> TTSV after click OK: ", TTSV)
  })

  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault()

    setData(TTSV)
    btnGroup.innerHTML = ''
    console.log(">>> TTSV after click Cancel: ", TTSV)
  })

  resetBtn.addEventListener("click", (e) => {
    e.preventDefault()

    setData(TTSV_default)
    TTSV = { ...TTSV_default }
    btnGroup.innerHTML = ''
    console.log(">>> TTSV after click Reset: ", TTSV)
  })
}



