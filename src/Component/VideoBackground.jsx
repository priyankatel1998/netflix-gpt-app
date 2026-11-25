import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground =({movieId})=>{
      console.log("VideoBackground rendered:", movieId);
      useMovieTrailer(movieId);
    const TrailerVideos = useSelector((store)=>store.movies?.TrailerVideos);
 console.log(TrailerVideos);
console.log(TrailerVideos?.key);
  if (!TrailerVideos?.key) return null;
 return(
    <div className="">
        <iframe 
        className="w-screen aspect-video"
       
         src={`https://www.youtube.com/embed/${TrailerVideos?.key}?autoplay=1&mute=1`}
              //src="https://www.youtube.com/embed/kMsiD1Nky5I?autoplay=1&mute=1"

          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe>
    </div>
)
}
export default VideoBackground;
//autoplay=1&mute=1
//{
//   "id": 1204680,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Happy Birthday Wile E Coyote",
//       "key": "qdZf3jYcpCI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "id": "6aae58abe82b8d58f6b66aa6",
//       "published_at": "2026-09-17T18:25:24.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Box Office Performance Update",
//       "key": "tcyk99G27tQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "id": "6aaf9e7a12eb6bd0728da0c7",
//       "published_at": "2026-09-17T14:00:06.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Painted Tunnel Injury?",
//       "key": "HJvgSk8oLls",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "id": "6aa875d8162326110560990e",
//       "published_at": "2026-09-11T13:25:11.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Falling Piano Injury?",
//       "key": "1Pn_qCGF9Cc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "id": "6aa875e562acac1e7560b558",
//       "published_at": "2026-09-05T17:49:20.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "We tink we taw you heading to see Coyote Vs. Acme over Labor Day weekend!",
//       "key": "eQcD2wwfBZE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "id": "6aafa34f55841c3ee4b9fb2f",
//       "published_at": "2026-09-04T20:54:33.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Certified Fresh and NOW PLAYING!",
//       "key": "4ZIINnHufZ4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "id": "6aafa376f655f41f1fb9fa16",
//       "published_at": "2026-08-28T18:21:02.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Coyote vs. ACME Drops The World’s Heaviest Popcorn Bucket",
//       "key": "Gb97t_troVA",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Featurette",
//       "official": true,
//       "id": "6a922d5b0bd94cf8605a444b",
//       "published_at": "2026-08-28T14:05:29.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "WE DID IT! Coyote Vs. Acme hits theaters tonight!",
//       "key": "jeTo56fPJjE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "id": "6aafa3c0569d6ff994064d6d",
//       "published_at": "2026-08-27T21:21:46.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "ACME: We Create The Impossible",
//       "key": "7wrdvTn9jcc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "id": "6a92af652677e3d0305ae25a",
//       "published_at": "2026-08-27T14:22:04.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Officially SEATED for Coyote vs. ACME.",
//       "key": "8SFmY_2r0Aw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "id": "6aafa3e658d1590e138dac49",
//       "published_at": "2026-08-25T20:50:47.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Silverware",
//       "key": "YD0jp-1jnWc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "id": "6aa876129548e4bd4660989f",
//       "published_at": "2026-08-25T15:20:17.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "The North American Coyote",
//       "key": "3QtIhESRbqE",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Featurette",
//       "official": true,
//       "id": "6a92b223d52561e4ddfaac93",
//       "published_at": "2026-08-25T13:00:33.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Create Something Looney With Coyote vs. ACME & Crayola",
//       "key": "ZhSgvt4iC-k",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "id": "6a92afbb6a7166f6b242483f",
//       "published_at": "2026-08-24T13:00:26.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Coyote Safety Tips from John Cena & Will Forte",
//       "key": "hJetn7mLmnE",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Featurette",
//       "official": true,
//       "id": "6a92b16afaf0f68ee69b8520",
//       "published_at": "2026-08-20T13:00:39.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Wile E. Coyote Meets Kevin",
//       "key": "BDkVXSKYhqU",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "id": "6a883dfaf878d0189d883f1d",
//       "published_at": "2026-08-20T12:51:21.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Thank You! Will Forte on Jimmy Fallon",
//       "key": "ullDfcwProk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "id": "6a92b002e65a801011faabad",
//       "published_at": "2026-08-18T19:25:23.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Will Forte & John Cena Weigh In: Beep Beep or Meep Meep?",
//       "key": "2MKM9SjlprY",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Featurette",
//       "official": true,
//       "id": "6a84792b92e1d38e1b11a57e",
//       "published_at": "2026-08-18T13:07:29.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Detonator Injury?",
//       "key": "tyQBh0vKUtw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "id": "6a92aec8a6dbdb24bb8e6abc",
//       "published_at": "2026-08-17T13:45:33.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "The Chase",
//       "key": "dp4vXGa6gCs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "id": "6a8097ec653fb1cabe6c90e2",
//       "published_at": "2026-08-15T16:40:09.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "An Absolute Blast",
//       "key": "Fncl62R3PMM",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Teaser",
//       "official": true,
//       "id": "6a7f3377c64cb62715b7a90a",
//       "published_at": "2026-08-14T15:00:08.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "End Summer With A Bang",
//       "key": "F-PGig35gk4",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Teaser",
//       "official": true,
//       "id": "6a7b2e9cd1976d07199dc9ca",
//       "published_at": "2026-08-11T13:00:38.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Catapult Injury?",
//       "key": "QaRq1oymgL8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "id": "6a92b31beccbd765a14248a1",
//       "published_at": "2026-08-07T14:50:19.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Big Round Bomb Injury?",
//       "key": "4WwrjXE3_QM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "id": "6a92af46d52561e4ddfaac60",
//       "published_at": "2026-07-30T16:55:47.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Final Trailer",
//       "key": "kMsiD1Nky5I",==youtupe key
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "id": "6a621509b2885893c0742e6c",
//       "published_at": "2026-07-23T13:00:26.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Kaboom Responsibly with Coyote vs. ACME",
//       "key": "eyiZfBXO8Dg",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Featurette",
//       "official": true,
//       "id": "6a454270a86ef9bdea7ed981",
//       "published_at": "2026-07-01T13:00:05.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Destiny Arrives August 28",
//       "key": "GXmAP6XyZ7g",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Teaser",
//       "official": true,
//       "id": "6a1ed44fea98f73b77e48b56",
//       "published_at": "2026-06-02T12:57:32.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "H-43VeYGiPM",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "id": "69e8ce03677c7afd3daaeb67",
//       "published_at": "2026-04-22T12:55:32.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Trailer Tomorrow",
//       "key": "qT6kR2nHI8M",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Teaser",
//       "official": true,
//       "id": "69e7765e034bfcb623a1cc4e",
//       "published_at": "2026-04-21T12:45:46.000Z"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Happy Tax Day",
//       "key": "G11SytnNYqI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "id": "69df959dce1770969ab7f7c4",
//       "published_at": "2026-04-15T13:00:29.000Z"
//     }
//   ]
// }