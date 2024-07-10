function skillsMember() {
    var member = document.getElementById('skillsMember');
    member.addEventListener('click', function() {
        console.log('skillsMember');
        member.style.color = 'red';
        member.style.border = '2px solid red';
    });
}