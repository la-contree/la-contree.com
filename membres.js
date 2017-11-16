const renderTrainers = () => {
  const container = document.querySelector('#trainers .container')
  const templateTrainers = document.querySelector('template#trainers').content
  const name = templateTrainers.querySelector('h3')
  const baseline = templateTrainers.querySelector('h3 .baseline')
  const image = templateTrainers.querySelector('img')
  const description = templateTrainers.querySelector('p')
  const links = templateTrainers.querySelector('.links')

  fetch('http://api.daktary.com/la-contree/la-contree.com/tree/bio-markdown/membres')
    .then(response => response.json())
    .then(trainers => {
      trainers.body.forEach(trainer => {
        image.src = trainer.meta.image
        baseline.innerText = trainer.meta.accroche
        name.innerText = trainer.meta.nom
        name.appendChild(baseline)
        description.innerHTML = trainer.body
        links.querySelector('.fa-twitter').parentNode.href = trainer.meta.twitter
        links.querySelector('.fa-sitemap').parentNode.href = trainer.meta.sitemap
        links.querySelector('.fa-github').parentNode.href = trainer.meta.github

        container.appendChild(document.importNode(templateTrainers, true))
      })
    })
}

renderTrainers()

const renderTrainings = () => {
  const container = document.querySelector('#trainings .container')
  const templateTrainings = document.querySelector('template#trainings').content
  const title = templateTrainings.querySelector('h3')
  const baseline = templateTrainings.querySelector('h3 .baseline')
  const image = templateTrainings.querySelector('img')
  const description = templateTrainings.querySelector('p')
  const links = templateTrainings.querySelector('a')

  fetch('http://api.daktary.com/la-contree/la-contree.com/tree/bio-markdown/formations')
    .then(response => response.json())
    .then(trainings =>
      trainings.body.forEach(training => {
        image.src = training.meta.image
        baseline.innerText = training.meta.accroche
        title.innerText = training.meta.titre
        title.appendChild(baseline)
        description.innerHTML = training.body
        links.href = training.meta.en_savoir_plus
        container.appendChild(document.importNode(templateTrainings, true))
      })
    )
}

renderTrainings()
