export default function Checkout(){
    return (
        <section className="bg-white flex flex-col w-96 h-112 rounded-2xl p-6 space-y-4">
        <div className="flex items-center">
          <img src="https://i.imgur.com/EHyR2nP.png" alt="The cover of Stubborn Attachments" className="w-14 h-14 rounded-lg"/>
          <div className="flex flex-col justify-center ml-4">
            <h3 className="text-base font-medium text-indigo-900">Stubborn Attachments</h3>
            <h5 className="text-sm text-indigo-500">$20.00</h5>
          </div>
        </div>
        <form action="/create-checkout-session" method="POST">
          <button type="submit" id="checkout-button" className="bg-indigo-600 text-white text-base font-medium py-2 px-4 rounded-xl hover:opacity-80 transition duration-300 ease-in-out">Checkout</button>
        </form>
      </section>
    )
}