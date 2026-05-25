import RevealOnScroll from '@/components/RevealOnScroll'

const REVIEWS = [
  {
    name: 'James Holloway',
    role: 'Owner, Holloway Plumbing',
    text: 'Absolutely brilliant service from start to finish. The van graphics look incredible and have already brought in new customers. Will definitely be using Signtec again.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Manager, The Kitchen Factory',
    text: 'Professional, fast and the quality of the hoarding wrap exceeded our expectations. The team were great communicators throughout the whole process.',
    rating: 5,
  },
  {
    name: 'David Okafor',
    role: 'Director, Readymade Gates Ltd',
    text: 'Our new shopfront sign has transformed the look of the business. Loads of compliments from customers. Highly recommend Signtec to anyone in the area.',
    rating: 5,
  },
  {
    name: 'Tracy Benson',
    role: 'Owner, Mattz Barbers',
    text: 'From the initial design right through to installation, the whole experience was seamless. Great value and outstanding results — our fascia looks amazing.',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="review-stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <div className="reviews-section">
      <div className="wrap">
        <RevealOnScroll>
          <div className="reviews-head">
            <h2 className="sec-title">What our <span className="out">customers</span> say</h2>
            <div className="reviews-sub-row">
              <p className="sec-desc" style={{ marginTop: 0 }}>Trusted by businesses across Coventry and the West Midlands.</p>
              <div className="tp-badge">
                <div className="tp-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="tp-score">Excellent</span>
                <span className="tp-label">Based on Trustpilot reviews</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="reviews-grid">
          {REVIEWS.map((review, i) => (
            <RevealOnScroll key={i} delay={String((i % 4) + 1) as '1' | '2' | '3' | '4'} className="review-card">
              <Stars count={review.rating} />
              <p className="review-text">&ldquo;{review.text}&rdquo;</p>
              <div className="review-author">
                <div className="review-avatar">{review.name.charAt(0)}</div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-role">{review.role}</div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="reviews-cta">
            <a
              href="#"
              className="btn btn-dark"
              aria-label="View all reviews on Trustpilot (coming soon)"
            >
              <span>
                View All Reviews on Trustpilot
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="16" height="16">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}
