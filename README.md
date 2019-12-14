
# Intro
The purpose of this project is to practice coding Angular components. We will use our knowledge from the pre-work and the practices to reorganize this website into components. We are going to experience what might happen on the job. You may be tasked with working an existing website in which all the Html is crammed into one file. Your job is to implement Angular and decide how you can organize the existing Html into components. In this project, you are told what the components should be, but in real life, you might have to decide this for yourself.

# Setup
* Fork the repo, clone your repo to your computer, npm i, npm start

## Part 1

### Create components
* In `src\app\app.component.html`, do a find for the name of the component you want to make `TopNav`
* You will find comments that look like `<!-- TopNav  -->  <!-- TopNav  -->`
* Search for the name of the component you are attempting to make
* This will indicate where the component should start and end
* Or use the expand/collapse feature of the editor to find the start and end
* Cut out the code between the comments and put in its own file
* Create component files for each component.
* Decide what is in the component that should not be hard coded
* Remove hard coded info and move it to a class property
* Make sure to populate the class property in the ngOnInit lifecycle method
* Use template syntax to then show that information in the html
* Make sure to use the component tag back in place of the html that you removed from `src\app\app.component.html`


### Components to make
* Dashboard
* TopNav
* SideNav
* Comments
* Tasks
* Orders
* Tickets
* AreaChart
* DonutChart
* TasksPanel
* TransactionsPanel
* MessagePreview (which is in TopNav)
* DateTime (which is in MessagePreview)
* TaskItem (which is in TaskPanel)
* TransactionRow (which is in TransactionsPanel)

### Use components where appropriate
* Wherever you cut out the html, you need to replace it with the tag of the component
* Replace the comments with the actual usage of the components (custom element), i.e. `<app-top-nav></app-top-nav>`

### Dyanmic elements
* TransactionsPanel
  * Import the orders array into this component from `./src/app/orders.ts`
  * In the `OnNgInit`method, assign this array to a class property called `orders` 
  * In `transaction-panel.component.html` use `ngFor` on the `<app-transaction-row>` element
  * `<app-transaction-row *ngFor="let order of orders"></app-transaction-row>`
* TaskPanel
  * Import the tasks array into this component from `./src/app/tasks.ts`
  * In the `OnNgInit`method, assign this array to a class property called `tasks` 
  * In `task-panel.component.html` use `ngFor` on the `<app-task-item>` element
  * `<app-task-item *ngFor="let task of tasks"></app-task-item>`
* TopNav
  * Import the messages array into this component from `./src/app/messages.ts`
  * In the `OnNgInit`method, assign this array to a class property called `messages` 
  * In `top.nav.component.html` use `ngFor` on the `<app-message-preview>` element
  * `<app-message-preview *ngFor="let message of messages"></app-message-preview>`

## Part 2