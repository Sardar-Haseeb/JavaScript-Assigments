var visits = localStorage.getItem('visits');

if (visits === null) {
    visits = 0;
}

visits++;

localStorage.setItem('visits', visits);

document.write("You have visited this site " + visits + " times.");