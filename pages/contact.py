from django.http import HttpResponse

def contact_form(request):
    html = '''
        <div class="inner">
            <h2>Get in touch</h2>
            <p>
                Contact us below to discuss how Dark Matter Software can help you accomplish your goals.
            </p>
            <div class="split style1">
                <section>
                    <form method="post" action="#">
                        <div class="fields">
                            <div class="field half">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div class="field half">
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div class="field">
                                <label for="message">Message</label>
                                <textarea name="message" id="message" rows="5"></textarea>
                            </div>
                        </div>
                        <ul class="actions">
                            <li><a href="" class="button submit">Send Message</a></li>
                        </ul>
                    </form>
                </section>
                <section>
                    <ul class="contact">
                        <li>
                            <h3>Address</h3>
                            <span>2828 SW Corbett Ave #208<br />
                                Oregon, OR 97201<br />
                                USA</span>
                        </li>
                        <li>
                            <h3>Email</h3>
                            <a href="#">sales@darkmattersoftware.io</a>
                        </li>
                        <li>
                            <h3>Phone</h3>
                            <span>(503) 277-9710</span>
                        </li>
                                                                <!-- <li>
                                                                    <h3>Social</h3>
                                                                    <ul class="icons">
                                                                        <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                                                                        <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                                                                        <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                                                                        <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                                                                        <li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                                                                    </ul>
                                                                </li> -->
                    </ul>
                </section>
            </div>
        </div>
    '''
    return HttpResponse(html)