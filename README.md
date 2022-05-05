# console-table-flip
Add a .flip() that can be chained onto a console.table() call

# Usage
## Import
Import console, then use it as normal.
```
import console from 'console-table-flip';
```

### Normal console.table() usage
```
console.table([1,2,3])
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   1    │
│    1    │   2    │
│    2    │   3    │
└─────────┴────────┘
```
### Console.table().flip()
```
console.table([1,2,3]).flip()
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   1    │
│    1    │   2    │
│    2    │   3    │
└─────────┴────────┘
(╯°□°）╯︵ ┻━┻
```
