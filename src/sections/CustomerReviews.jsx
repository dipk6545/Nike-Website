import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';

const CustomerReviews = () => {

  const reviewcard = ()=>
    reviews.map(
      (review)=>(
        <ReviewCard key={review.customerName} {...review}/>
      )
    );

  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customer</span> Says?
      </h3>
      <p className="info-text text-center m-auto mt-4 max-w-lg">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviewcard()}
      </div>
    </section>
  );
};

export default CustomerReviews;
