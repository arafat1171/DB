import JellyfishImage from '../../assets/Jelly.png';

const WelcomeCard = () => {
  return (
    <div className="h-90 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl p-6 border border-blue-400/30 relative " style={{ backgroundImage: `url(${JellyfishImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="relative z-10">
        <p className="text-gray-300 text-sm mb-2">Welcome back,</p>
        <h2 className="text-white text-2xl font-bold mb-2">Mark Johnson</h2>
        <p className="text-gray-300 text-sm mb-4">
          Glad to see you again!
          <br />
          Ask me anything.
        </p>
        <button className="text-white text-sm hover:underline">Tap to record →</button>
      </div>
    </div>
  )
}

export default WelcomeCard
