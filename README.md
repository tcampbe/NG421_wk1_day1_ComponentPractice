
### Intro
The purpose of this project is to practice coding Angular components. We will use our knowledge from the pre-work and the practices to reorganize this website into components. We are also going to experience what might happen on the job. You may be tasked with working an existing website in which all the Html is crammed into one file. Your job is to implement Angular and decide how you can organize the existing Html into components. In this project, you are told what the components should be, but in real life, you would have to decide this for yourself.

### Setup
* Fork the repo, clone your repo to your computer, npm i, npm start

### Create components
* In `src\index.html`, do a find for comments that look like `<!--   <TopNav>  -->  <!--   </TopNav>  -->`
* Search for the name of the component you are attempting to make
* This will indicate where the component should start and end
* Or use the expand/collapse feature of the editor to find the start and end
* Cut out the code between the comments and put in its own file
* Create component files for each component.
* Decide what is in the component that should not be hard coded
* Remove hard coded info and move it to a class property
* Use template syntax to then show that information in the html
* Make sure to use the component tag back in place of the html that you removed from `src\index.html`


### Components to make
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
* Replace the comments with the actual usage of the components (custom element) `<app-top-nav />`


### Dynamic Elements
* TasksPanel - map the array of "tasks" into array of TaskItem's. Pass one task into TaskItem
* TopNav - map the array of "messages" into array of MessagePreview's. Pass one message into MessagePreview
* TransactionPanel - map the array of "orders" into array of TransactionRow's. Pass one order into TransactionRow

