import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'computer-science-back-tracking',
  templateUrl: './back-tracking.component.html',
  styleUrls: ['./back-tracking.component.scss']
})
export class BackTrackingComponent {
  constructor(public router: Router){
  }

  activeRoute(route) {

  }

  markdown = `# Backtracking
---

Is a general algorithm for finding all (or some) solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution.

## General algorithm (pseudo-code)
\`\`\`typescript
findSolutions(n, other params)
    if (found a solution)
      solutionsFound = solutionsFound + 1;
      displaySolution();
      if (solutionsFound >= solutionTarget)
        exit;
  return

  for (val = first to last)
    if (isValid(val, n))
      applyValue(val, n);
      findSolutions(n+1, other params);
      removeValue(val, n);
\`\`\`
`;
}
