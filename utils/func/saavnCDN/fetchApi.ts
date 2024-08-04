class saavn {
    async link(link: string) {

        return await fetch(`https://api-codershubinc.vercel.app/v1.0/saavnCDN?link=${link}`)

    }
}

const Saavn = new saavn()

export default Saavn