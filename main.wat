(module
  (func (result i32)
    i32.const 1
  )
  (func (param i32) (result i32)
    get_local 0
    get_local 0
    i32.add
  )
  (func (param i32) (param i32) (result i32)
    get_local 0
    get_local 1
    i32.add
  )
  (export "affiche1" (func 0))
  (export "double" (func 1))
  (export "somme" (func 2))
)