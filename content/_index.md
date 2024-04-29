+++
title = 'Home'
date = 2023-01-01T08:00:00-07:00
draft = false
+++

<div class="home-hero">
    <div class="hero-content">
        <div class="grid-container">
            <div class="grid-x grid-padding-x grid-padding-y">
                <div class="cell small-10 medium-8 large-6">
                    <h1>Changing the World Through Design</h1>
                    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                    <a href="#" class="button large">Learn More</a>
                    <a href="#" class="button large hollow white">Learn Less</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="grid-container">
    <div class="grid-x grid-padding-x margin-top-3 margin-bottom-3">
        <div class="cell medium-6 medium-order-2">
            {{< image-processor src="img/9.jpg" process="fill 750x350" class="thumbnail" >}}
        </div>
        <div class="cell medium-6 medium-order-1">
            <h2>Our Agency, our selves.</h2>
            <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.</p>
        </div>
    </div>
    <div class="grid-x grid-padding-x margin-top-3 margin-bottom-3">
        <div class="cell medium-4">
            <h3>Photoshop</h3>
            <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
        </div>
        <div class="cell medium-4">
            <h3>Javascript</h3>
            <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
        </div>
        <div class="cell medium-4">
            <h3>Marketing</h3>
            <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
        </div>
    </div>
    <div class="quick-facts margin-top-3 margin-bottom-3">
        <hr>
        <div class="grid-x grid-padding-x grid-padding-y small-up-1 medium-up-3 large-up-5 text-center align-spaced">
            <div class="cell">
                <a href="#">
                    <div class="stat">28</div><span>Websites</span>
                </a>
            </div>
            <div class="cell">
                <a href="#">
                    <div class="stat">43</div><span>Apps</span>
                </a>
            </div>
            <div class="cell">
                <a href="#">
                    <div class="stat">95</div><span>Ads</span>
                </a>
            </div>
            <div class="cell">
                <a href="#">
                    <div class="stat">59</div><span>Cakes</span>
                </a>
            </div>
            <div class="cell">
                <a href="#">
                    <div class="stat">18</div><span>Logos</span>
                </a>
            </div>
        </div>
        <hr>
    </div>
    <div class="recent-work margin-top-3 margin-bottom-3">
        <h3>Our Recent Work</h3>
        {{< recent-work >}}
    </div>
    <div class="recent-posts margin-top-3 margin-bottom-3">
        <h3>Our Recent Posts</h3>
        {{< recent-posts >}}
    </div>
</div>

<div class="grid-container">
	<div class="grid-x grid-padding-x grid-padding-y">
		<div class="cell">
			{{< call-to-action id="" class="" heading="Get Started Today" subheading="Your new site will be up and running in no time." link_text="Start Now" link_url="https://gohugo.io/" >}}
		</div>
	</div>
</div>