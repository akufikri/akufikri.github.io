const About = () => {
      return (
            <>
                  <section className='flex items-center bg-no-repeat h-screen justify-center'>
                        <div className='text-center'>
                              <img
                                    className="relative ms-2 inline-block h-24 w-24 rounded-2xl object-cover object-center"
                                    alt="Image placeholder"
                                    src='profile.jpg'
                              />
                              <h1 className="text-3xl text-white mt-5 font-semibold">Hi, Nama Saya Fikri Nurhakim</h1>
                              <div className="max-w-4xl">
                                    <p className="text-white mt-2">Saya adalah seorang pelajar, di SMK INFORMATIKA AL IRSYAD AL ISLAMIYYAH KOTA CIREBON, dan sekaligus saya seorang fullstack web developer yang bersemangat untuk membuat hal yang sulit menjadi gampang, dan hal yang tadi nya tidak bisa jadi bisa...</p>
                              </div>
                        </div>

                  </section>
            </>
      );
}

export default About;
