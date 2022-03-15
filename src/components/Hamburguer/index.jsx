import styles from "./styles.module.css"

function Hamburguer({active}) {
  return (
      <div className={active ? styles.sidebar : styles.active}>
          <div>
              <ul>
                  <li>Item1</li>
                  <li>Item1</li>
                  <li>Item1</li>
                  <li>Item1</li>
                  <li>Item1</li>
                  <li>Item1</li>
              </ul>
          </div>
    </div>
  )
}

export {Hamburguer}