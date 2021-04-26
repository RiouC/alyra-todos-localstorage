const SelectTodos = (props) => {
    const { filter, setFilter, darkMode } = props
  const handleSelectChange = (event) => {
    setFilter(event.target.value)
  }
  return (
      <div className={`input-group mb-3 ${darkMode ? "bg-dark text-light" : ""}`}>
        <label className={`input-group-text ${darkMode ? "bg-dark text-light" : ""}`} htmlFor="select">
        Filtrer les tâches
      </label>
      <select
        className={`form-select ${darkMode ? "bg-dark text-light" : ""}`}
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        {/* eslint-disable-next-line */}
        <option value="all">Toutes 🌈</option>
        {/* eslint-disable-next-line */}
        <option value="completed">Terminées 💪</option>
        {/* eslint-disable-next-line */}
        <option value="notcompleted">pas Terminées 🌪</option>
      </select>
    </div>
  )
}

export default SelectTodos
