(module
  (func (param i32) (result i32)
    i32.const 42
  )
  (func (param i32) (result i32)
    get_local 0
    get_local 0
    i32.add
  )
  (export "double" (func 1))
)