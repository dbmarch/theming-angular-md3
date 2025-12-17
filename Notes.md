To change the color of a component, you can use this technqique:


1) Create styles such as these

.tertiary, [color="tertiary"], [color="accent"]{
  @include mat.theme((
    color: mat.$rose-palette
  ));
}


  .error, [color="error"], [color="warn"]{
  @include mat.theme((
    color: mat.$red-palette
  ));
  }

   .success, [color="success"]{
  @include mat.theme((
    color: mat.$green-palette
  ));
  }


  And then you can access them:

        <mat-card-actions>
        <button mat-button color="success" >LIKE</button>
        <button mat-button class="success" >SHARE</button>
        <button mat-button [matBadge]="activity.members">EXPLORE</button>
       </mat-card-actions>
  