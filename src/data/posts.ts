export interface Post {
  slug: string;
  question: string;
  category: string;
  excerpt: string;
  body: string;
}

export const posts: Post[] = [
  {
    slug: "menstrual-cup",
    question: "A guide to Menstrual Cups",
    category: "Menstrual Health",
    excerpt: "Period pain is one of the most common questions I get. Here's the real answer - and when to actually worry.",
    body: `You want to use a menstrual cup? Well, you've come to the right place. Here is the Dr Cuterus guide to menstrual cups, your new period bestie.

    A menstrual cup is a silicone device that sits inside your vaginal canal, and collects all the blood exiting your uterus on your period. It's a very comfortable period product that also is great on the sustainability angle as one menstrual cup is reusable (through your entire period cycle!) for up to 10 years. That means you don't need to buy a new pad/tampon and change it every single day. Better for your wallet, and better for the environment.

    To start with, you first need to find the right size of the cup for you. Online cup charts can be a bit confusing, with wayyyy too many complicated terms thrown in. Here's a simple rule of thumb you need to follow: if you have given birth vaginally, go for a larger cup. This simply means your vagina can accommodate something bigger (I mean a baby's head is much much larger than a cup and if you can have that in your vagina, a cup is child's play). If you've never given birth/have given birth but via c-section, go for a small or medium cup. Teenagers and people who have never had sex should go for the extra small cup. That's it!

    To be very honest, don't get too caught up in the size. I have worn every size comfortably, and I am not a teenager but nor have I ever delivered a baby. Yet, an extra small, a medium, and a large all fit me well. The difference between sizes is actually quite small, so it won't really bother you too much; the only exception is that extra small is definitely the right fit for teenagers or people who have never had anything inside their vagina. You might also see confusing information on the internet about finding out the position of your cervix, and special low cervix cups, etc., but again, do not get caught up in that. Your cervix is mobile… it moves up and down throughout your cycle, and depending on what position you're in. So, by and large, stick with how much your vagina has gone through to finalise the right size for you.

    Once you've found your size, you've ordered it, and are now ready with your cup at hand, let's talk about the actual insertion part. First, sterilise your cup - you don't want to put anything unclean in the vagina. Boil a pot of water (you can set aside a specific utensil in your kitchen for your menstrual cup needs), and put your cup in the boiling water for 10 minutes. That's it, your cup is now sterilised! Once your period arrives, simply squat and insert the cup into your vagina. It's normal to struggle a little bit in your first few attempts - after all, you are trying something new for the very first time! However, don't get discouraged, and just go for it! Practice makes perfect. You can find some excellent cup folding techniques here to see which one works best for you. I also find that squatting on the floor helps me the most, as it allows your pelvic floor to fully relax and make the cup insertion and removal painfree. For the first few tries, squat in your shower area so if there is any spill during removal, you can easily clean it up.

    Once you've inserted your cup, it can take a few trials to finally land what works best for you in terms of when to empty the cup. That depends on your flow, and it takes a few cycles to fully understand that. As a backup, you can wear a period panty or a panty liner to catch any leaks. Once you're ready to empty your cup, simply take out your cup, dump the blood out in the toilet or in the sink, give your cup a rinse, and insert it again. I prefer emptying mine in the sink because blood being thick can settle at the bottom of the toilet bowl, making it a pain to clean out. If you're using a public toilet, skip the rinse! Just empty your cup, give it a wipe if you feel like, and insert it again. You can wear your cup safely for up to 12 hours in a stretch so make sure to definitely empty it in 10 hours. That way, you have a 2 hour safety margin.

    That's it! Menstrual cups make periods sooooo much easier. I find it easy to go to work, to travel, to swim, to sleep, and just live life wearing my cup. I have even literally gone diving with sharks when wearing my cup, and I cannot be more excited for you to start your own cup journey.

    Dr Cuterus's Top Tips for Menstrual Cups:
    1. If you're going to try inserting your cup when you're not on your period, then make sure you're using a water based lubricant. Do not use any moisturisers or oils because they can mess up the pH of your vagina, and also damage your menstrual cup!
    2. After inserting your cup, give it a twist. This makes sure it's fully open and you don't get any leaks
    3. When inserting your cup, aim it backwards and upwards (towards your hips), not directly upwards. This is because your vagina is not a straight line pointing upwards, but instead, it is tilted towards the back, almost like it's leaning back.
    4. Empty your cup before you go to sleep for a blissful leak free sleep!

    Byeeeee!`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
