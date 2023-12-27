import "./posts.scss";
import Post from  "../post/Post";
import Profile from "../../assets/AniketProfile.jpg";
import PratikPost from "../../assets/VK.jpg";
import BhartiPost from "../../assets/Goku.jpg";
import RohitPost  from "../../assets/Krishna.jpg";





export default function Posts(){
    const posts = [
        {
          id: 1,
          name: "Aniket Thakre",
          userId: 1,
          profilePic:Profile,
            // "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: "Me being serious, whats my cam capture always",
          img: Profile,
        },
        {
          id: 2,
          name: "Anushka Sain",
          userId: 2,
          profilePic:
             "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: "Virat Kohli the Inspiration",
          img:PratikPost,
        },
        {
          id: 3,
          name: "Bharti Singh",
          userId: 3,
          profilePic:
             "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUVdeWmz/////8AbuMAcOSr0/8AZ+MAbeOo0f+SwfsAbOQPc+Wkzv+t1f8AaeMAbOOey//v9f3E1/d5pu0/iepGjet9sfYdeeaYxfzi7PsvgeiHufi4z/WKse/q8fxxqfNenO/Z5fpRkOm+2/5snux7p+3T4fmYuvGjwfJYmO5spfI0g+nI4P7L2/iStvBpnOy62f6sxvO+0vY/mkmzAAANGElEQVR4nOWde3uiOhDGKSSABBQVxUu91l7Uttv2+3+4E6RdASFkctPteff8sc/ZWvNjJpkkTCaWrV/LzeD+efG4229HSXJMktF2v3tcPH9+PS0NfLul85f33z4X27TbDQLPQYhQWZmyvyDkeL2g66Lt48ubVlBdhP3B+xZ1Aw/lUI2irF7QRdv3QV9TS3QQLu+HqRs4pAWuxOkEbjq810GpnPBpMXN7iJutKNRzZ4sn1Q1SSzgYOtR2QnjfxnQCb/eltE0KCQe7IGjrdjyQKAgOb+qapYpwuiCBmG/WCQVkMVXUMjWEXyPXUYaXy3ETNd6qgLD/TB+5Yr5MJCDvCgZXacLlULn5znLcofRsQJJw+sdV1/vqhNw/kh1SinC618ynglGCsL8zwJczHiT6ozjhomuGL2d8N074iTxjfJk8cm+UcJoERvkydROx7ihEuHB1xL82EXdhiPApNeugZ3mpwMoDTvjoXokvk/uonXCT6pvB8MhLN3oJn6/SA4si0MABI9yaH0IvFYxA8R9CuCHmYjxLCEEGHADhyzWHmLLcFx2Eh+61uQrq7tQTJtcKgvXyjooJl9ZtdMGzkMW5NuYj3GjZppATCfgiIxfh4HbGmKLcgSrC+9sEpIg8KyoOws9bBaSInyoIbygMXoojMLYS3jQgD2Ib4Q27aK5WR20hvNlB5qy24YZNeKNhoqyWoMEk3PwLgBSRGfpZhMvetdvOqYA1gWMRprc3VasXYVEw/i25tcl2s1AiQji8reUSW17zerGR8POWFrzt6jZG/ibCf2QYPatxQG0iVDvI5GleyPG8LNvLoX87JYGp/Q4Y4VbZKEPZHM9K9ofxvDOJ73z/Lownnfn4sD9anqMgO+VHaAshfFa0L0rprNFhHkcRxpSN/pfp9DeMoyieHxKijDJ45iecKumEFC9ZTXK2elHOCHcOiSLI+q5YS6gi1CNnNL6LcANbUTgKxyNHQbcgKS/ho3QkJM5sFUZNpquxZRSuZp70c3Xq3kzVED7J+ijxRvMIc/PlkDjqbKUN6dZs99cQSvooctYxv/mKiuK1NCMP4ULKR4mzDoHmKxoyXEslb1re5YvwC0KpcZR421iYL2eMt1JP2L1IZ7ggTCSeoTPrSPHljJ2ZhKuSi1VGlfBefMJNnJVY/6syRiuJ+BhUt22qhOK/GiUxT/TjEY4T8WwBxCZ8F+4EnhoD5qJmFEZ0FizCvqiPknSiyoC58CQV7Y3dPoNwKPhb0ahx7ikq3x+JNmbXTCgaKXq7SDFfpugguNdXjhglwj9CT414Y7Ue+iM8FpuqonUToaAJUUcPIEXsiDlqyYhFQkETKh5jSogTMSP+qSdcCpmQTFSPMUX5E5E2lYxYIBQaSJFWwAxRxIpoWEfYFzAh0Q2YIYpM4dx+DeG7wCzC0zbInIXnAvMs572GUMBHdYWJCuJYBPGS8B6+gYgOJgAp4gH+9M9LjL+E8HUhGumYydQpgk/gzuvEH0KBaJ/qHmTO8lNw6/4GjB/CBXiccbQPowXCCbh5aFEhBPuoszLTCXNh+HoRlQnfoOMMSUx1wlwReJwIBiXCHbQro9icj2byY3ALdyVCqAmRUR/NhFdQxG6R8AtISI5mffSEOAP6afBVIIQ6qdcxDnh31wFObb7dNCcErqXJ1rSPZsJbqBHPhE9AJ3UMDzO5/BgYMYK3v4QLmJOi9TVMSI24BrZz8ZcQ2IdReA0TUiOGMML8nXBGCFz7XsuEcCO6y2/Ce9i+5HV6YSZoT+zdfxPCNmjI1nws/FEEG05P2zUZIWxpcpVY+CNgTExzQmA3nF3PhNSIM1Bbs45ICQegaIhW1+qFmXzY7DSbuFnQTTaHGSp8HEXQRBPIp/0Q1tj3EyGo9xLW5oyPx6MUWcnKF4kn2F8lFrJGYxZjNAK1dnsiBO24onHz1+NOmv2uLNNSYJsRjwkiJCvdls6bP+2PIW5KvIxwCXrvy3BSPP4bV0kPvNGID72/T7rHekAgN+0uKSFoA4OxeeF3ihMHZiPrAMelT3canyNsO4NOvi37BRJiGGv7ykAOnbyW+0ra+DWwtb73QgkfIZ9wGsO9Py+7D2xDvNpuZ974fDoQN0WPlBA2lDY/233598A2Oqq+R/bNX2QBGkxGlBDARz/Q7KTV/tH8MOo+bXE/HwyJFwRRQsicjeF6F/MpBOmHuNpVZs02BL2ncW0LFCwY3QNf2BDkpfw2rHZ4trpLC7RH4zUvDfG60kbQpnj1+TD6oR9DBv/gyRoAlr/Eam61X3lVC5uh+5X3EgxnubA3U70v6xPwRJh2wcfiFxMLmOddajZhLdFAMd/7tJ4BXs3wHapJMYG5xzBCLeG86EvehPGj1bjElPNsQXYS2VEcz88by70VdJ2MV+dZrceYegMHU7SwIFMa1sIi++rJ7FQAmiCL2cSGT8+/VybOjJ1lBVpeoKG1g5i8zfXwfH+czbbMFV5zy/F4O0uP+7anAwoX5I8FcWrUugmVHWSSWuPzfBqSz0f2FmRaavLVfbNAL/XJyAINvVfbCy4Kti+c0D8AwvDadCeFkEnNkf7hl3Nttm9BbDj7Fwl9SD/89YRAG95IP7yD9UPIivl679WKgi2fkv9BPFQ7pzEi0Jxmq3ZeakTQeSnkBXDL2sKQoGsLdetDU4KuD9Wt8U0JusZXtk9jTNB9GlV7beYE3WtTtV9qTOD9UlV73uYIoXveqt5bGBP4vYWqd0/mCGG5CureHxoTaKA5vT9U9A7YmGDvgIcK3+MbksB7fFW5GIYEzMUYqMynMSR4Po26nCgTEsmJUpjXdtEcHPntAr0FEMprU5mbWAYM16nTrnQPmQvCGrvQml/qdxCfRyHUnORV/Z1C+aWacoT9kN+fuFPExHKENeV5Q44OcB9wEMvz1pSrH0EeXMr5OwVz9fWct4hAs0EuGwqft9BzZiYC1O7j3DwQPjMDPffEFzAgh+n4jvsB09gL5540nV2b8Dt/j5U/c35m4mfXoCe5+XoiHnPeTkMCrpRp8GHnwvlDTWdI8fzYc1CbnN6Rr0KKzBlSgXPAXMOpj+NOu3hrSUqdAwaf5eae2Cj6mTvZs9zg8/hma0acAMHn8YP/WU2F318XA15DyeyelHxtE2jQt7Is13+rPo1QjSFjiCpqDAnUiQJt2UhJSZ2o/0Gtr99fr02o5p5jouYedLZ2alhdzb3fXzdRrPal3uKeamtf3mj9UqESrQ31SwVr0KIbrEFbLCSsoo6wwPERTkDROsKbBsLfXwtauJ63t1ZYcf5HfrQTLIHPqOctXJPdSf6Rmuy3VVdf9JoGZl19ibsRFF1ukUvf3Qj/g/stJO8okb6DJQeUuqOkenuu0ntmkJJ7ZiZHrffM3MJdQTL3IXHcFfT773tScmeXIGK85sxtaNYljoZ710h3JrTe8ONZV/JyOc571+TuziNe0hGMjH7USaQ6oTOsoVF9/6EjzHcSZRSPhPz3H4qPpyidS85s/GgufA0S4A5L+0XoHlLiHBSEfB8fxMZTyD2kYnfJOqqmbWKTNjSqR1F2H7Cqe+UyCd0tV52PthFC73RGM2Xz7kw4hl4RWBcomITAe7k95We+8B4Us+D3csPuVnfG6l/SRGNAZxS5W52uMnj9hFhaNvdxh/vmbnSxouAi5A38ZKYpu92PeVvAomD925IrKqKjvk1vn2+pGCwFCemA2v4MUaJmYV9PiHm6Sv1chovQfmuNGVoB+RDdAZOBTWjftyASvYA8iG718lgYof3JRCQz7dkKvs/O9nKrO09QQvuFgUhS3qQ0GcQ71ojqNkZ6bkIGIjGT+uXHzXGxHZCDsNlR2YXjFCI2vsnnAOQhbBpuzOUnNuV8tQ0y3IT2oA7R3MVyTSlDLWECQmhvepc9weDFcrVpXyRgBnogob282DzhTIRWRXjRFVHKmqrBCelKo1KAdW04v7SS+eUxVhOChPawtCRurmSsSbh0aq174G43P2EpMJr10UwlP+WJEgKE9ob8eMo1CtXg/c+3I9S0JyNLaNvb7xXjNW588sPvqU2wBbUZRkg9NfuW6xQAyc8jELd+41cVoT1Ns+5wpVvJaFB0Ur4oKE5o24+uYyRx9lL+2HMfwe2FE9pPs6vd2TWDDDHihLb9Gl+jRGQYP4g0VojQ7uPYPCDmnKYpIaSxMTRrxjCEjjCyhGZdNYxfhdspTmj3PwwxhvFHv705GggNMcrxSRLSdaNuRlk+aUJqxweNjDRASPIpIKSMusYcmfHlLAWEVBusHDKMsWh8KEsNIe2Q1JDqIENqPmn3/JYqQqrphxpIivdxkUMpLoWEVJuPWNJdMzw13vkjtYRU09c7UVNSurtXhdbLpZyQqr95CCklBJP+dBw+bFT1vaJ0EGbqT1+jOMNs48x+JI6jVy10mXQRntSfPr1GtP0n0hJr/j+yf8EPT1NdcCdpJfxWfzndPL0+fESYyr/zMY4+Hl5fN9OlVrRv/QfE0Dl7DfagWgAAAABJRU5ErkJggg==",
          desc: "Ultra Instinct Mode On",
          img:BhartiPost,

        },
        {
          id: 4,
          name: "Rohit Turkar",
          userId: 4,
          profilePic:
             "data:image/png;base64,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",
          desc: "Ultra Instinct Mode On",
          img:RohitPost,

        }

      ];
    
      
    return(
        <div className="posts">
            {posts.map(post=>(
          <Post post={post} key={post.id}/>
           ))}
  </div>
    )
}