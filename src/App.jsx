import './CSS Files/App.css'

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.course}</h1>
      <p>Course Information</p>
    </header>
  )
}

const Content = (props) => {
  return (
    <div className="content">
      <div className="subject">
        <span className="subject-name">{props.part1}</span>
        <span className="units">{props.exercises1} units</span>
      </div>

      <div className="subject">
        <span className="subject-name">{props.part2}</span>
        <span className="units">{props.exercises2} units</span>
      </div>

      <div className="subject">
        <span className="subject-name">{props.part3}</span>
        <span className="units">{props.exercises3} units</span>
      </div>
    </div>
  )
}

const Total = (props) => {
  return (
    <div className="total">
      <span>Total Units</span>
      <strong>
        {props.exercises1 + props.exercises2 + props.exercises3}
      </strong>
    </div>
  )
}

const Footer = (props) => {
  return (
    <footer className="footer">
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = 'Bachelor of Science in Information Technology'

  const part1 = 'CSIT340 - Industry Elective 1'
  const exercises1 = 3

  const part2 = 'CSIT341 - Industry Elective 2'
  const exercises2 = 3

  const part3 = 'CSIT342 - Industry Elective 3'
  const exercises3 = 3

  const name = 'Denzel Don L. Sala'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div className="app">
      <Header course={course} />

      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />

      <Footer
        name={name}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App